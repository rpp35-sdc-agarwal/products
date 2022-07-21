import React from 'react';
import Search from './Search.jsx';
import QuestionList from './QuestionList.jsx';
import exampleQuestions from '../../examples/questionList-example.js'
import QuestionPopup from './QuestionPopup.jsx';
import API from '../../../../config.js';
import axios from 'axios';

/*
  QuestionList should display up to 2 questions by default
*/
class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allQuestions: [],
      questions: [],
      more: true,
      search: '',
      add: false,
      productId: '',
      expandable: false
    }
    this.retrieveQuestions = this.retrieveQuestions.bind(this);
  }

  async retrieveQuestions (productId) {
    let options = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/?product_id=${productId}&count=100`,
      headers: {
        'Authorization': API
      }
    }

    let res = await axios(options);

    this.setState({
      allQuestions: [...res.data.results],
      questions: [res.data.results[0], res.data.results[1]],
    }, () => {
      this.setState({
        lastIndex: this.state.questions.length - 1,
      })
    })

    return res.data.results;
  }

  resetQuestions (productId) {
    this.retrieveQuestions(productId)
      .then(() => {
        this.setState({
          more: true,
          add: false,
          search: ''
        })
        console.log('reset')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidUpdate (prevProps) {
    if (prevProps.currentProductId !== this.props.currentProductId) {
      this.setState({
        productId: this.props.currentProductId
      }, () => {
          try {
            this.retrieveQuestions(this.state.productId)
          } catch (err) {
            console.log(err)
          }
      })
    }
  }

  handleSearch (keyword) {
    if (keyword.length >= 3) {
      this.setState({
        search: keyword
      }, () => {
        let collection = this.state.allQuestions.filter((question) => {
          return question.question_body.toLowerCase().includes(this.state.search.toLowerCase())
        })

        if (collection.length) {
          this.setState({
            questions: [...collection]
          }, () => {
            this.checkExpand(this.state.questions);
          })
        }
      })
    } else {
      this.resetQuestions(this.state.productId);
      this.checkExpand(this.state.questions);
    }
  }

  checkExpand (questions, allQuestions) {
    let element = document.getElementsByClassName('question-list');
    if (questions.length > 2) {
      element[0].classList.add('expand-question-list');
      this.setState({
        expandable: true
      })
    }

    if (questions.length <= 2) {
      element[0].classList.remove('expand-question-list');
      this.setState({
        expandable: false
      })
    }
  }

  toggleQuestionList () {
    // If there are still questions in the allQuestions collection
    if (this.state.questions.length < this.state.allQuestions.length) {
      let count = 1;
      let currentQuestions = this.state.questions.slice();

      while (count <= 2) {
        if (this.state.allQuestions[this.state.lastIndex + count]) {
          currentQuestions.push(this.state.allQuestions[this.state.lastIndex + count]);
        }
        count += 1;
      }

      this.setState({
        lastIndex: currentQuestions.length - 1,
        questions: [...currentQuestions]
      }, () => {
        // check if questions collection has the same length with allQuestions collection after adding new questions
        if (this.state.questions.length === this.state.allQuestions.length) {
          this.setState({
            more: !this.state.more
          })
        }
        this.checkExpand(this.state.questions);
      })
    } else {
      // otherwise, if there are no more questions,
      this.setState({
        more: !this.state.more
      }, () => {
        this.checkExpand(this.state.questions);
      })
    }


    if (!this.state.more) {
        this.setState({
          questions:[this.state.allQuestions[0], this.state.allQuestions[1]]
        }, () => {
          this.setState({
            lastIndex: this.state.questions.length - 1
          })
        })
      }
  }

  addQuestion () {
    this.setState({
      add: !this.state.add
    })
  }

  render() {
    // console.log('questions in Questions: ', this.state.questions)
    return (
      <div id='QA' data-testid="test_questions">
      <h2>Customer Questions & Answers</h2>
      <Search handleSearch={this.handleSearch.bind(this)} />

      {this.state.questions.length ?
        <div>
            <QuestionList questions={this.state.questions} currentProductName={this.props.currentProductName} />
          {this.state.more || this.state.add ? <button className="general-button" onClick={this.toggleQuestionList.bind(this)}>MORE QUESTIONS</button> : <button className="general-button" onClick={this.toggleQuestionList.bind(this)}>COLLAPSE QUESTIONS</button>}
          <button className="general-button" onClick={this.addQuestion.bind(this)} >ADD A QUESTION +</button>
        </div> :  <button className="general-button" onClick={this.addQuestion.bind(this)} >ADD A QUESTION +</button>
      }
      <div>
        {this.state.add ? <QuestionPopup toggleQuestion={this.addQuestion.bind(this)} currentProductName={this.props.currentProductName} productId={this.state.productId} retrieveQuestions={this.retrieveQuestions.bind(this)} /> : null}
      </div>
    </div>
    )
  }
}

export default Questions;