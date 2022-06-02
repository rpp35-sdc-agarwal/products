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
    return res.data.results;
  }

  componentDidUpdate (prevProps) {
    if (prevProps.currentProductId !== this.props.currentProductId) {
      this.setState({
        productId: this.props.currentProductId
      }, () => {
        console.log('state.productId: ', this.state.productId)
        this.retrieveQuestions(this.state.productId)
          .then((results) => {
            console.log('results: ', results);
            this.setState({
              allQuestions: [...results],
              questions: [results[0], results[1]]
            }, () => {
              console.log('questions: ', this.state.questions);
              this.setState({
                lastIndex: 1
              })
            })
          })
          .catch((err) => {
            console.log(err);
          });
      })
    }

  }

  handleSearch (keyword) {
    this.setState({
      search: keyword
    }, () => {
      console.log('searched: ', this.state.search);
    })
  }

  toggleQuestionList () {
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
        console.log('currentQuestions: ', this.state.questions.length);
        if (this.state.questions.length === this.state.allQuestions.length) {
          this.setState({
            more: !this.state.more
          })
        }
      })
    } else {
      this.setState({
        more: !this.state.more
      })
    }
    
    if (!this.state.more) {
        this.setState({
          questions:[this.state.allQuestions[0], this.state.allQuestions[1]],
          lastIndex: 1
        })
      }
  }

  addQuestion () {
    this.setState({
      add: !this.state.add
    })
  }

  render() {
    return (
      <div id='QA' data-testid="test_questions">
        <h2>Have a question?</h2>
        <Search handleSearch={this.handleSearch.bind(this)} />
        
        {this.state.questions.length ? 
          <div>
             <QuestionList questions={this.state.questions} />
            {this.state.more ? <button onClick={this.toggleQuestionList.bind(this)}>MORE QUESTIONS</button> : <button onClick={this.toggleQuestionList.bind(this)}>COLLAPSE QUESTIONS</button>}
            <button onClick={this.addQuestion.bind(this)} >ADD A QUESTION +</button>
          </div> :  <button onClick={this.addQuestion.bind(this)} >ADD A QUESTION +</button>
        }
        <div>
          {this.state.add ? <QuestionPopup toggleQuestion={this.addQuestion.bind(this)} currentProductName={this.props.currentProductName} productId={this.state.productId} retrieveQuestions={this.retrieveQuestions.bind(this)} /> : null}
        </div>
      </div>
    )
  }
}

export default Questions;