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
    
    this.setState({
      allQuestions: [...res.data.results],
      questions: [res.data.results[0], res.data.results[1]],
    }, () => {
      console.log('this.state.allQuestions in retrieveQuestions: ', this.state.allQuestions);
      console.log('this.state.questions in retrieveQuestions: ', this.state.questions)
      this.setState({
        lastIndex: this.state.questions.length - 1,
      })
    })
    
    return res.data.results;
  }
  
  // resetQuestions (productId) {
  //   this.retrieveQuestions(productId)
  //     .then(() => {
  //       this.setState({
  //         more: true,
  //         add: false
  //       })
  //       console.log('reset after adding question')
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }
  
  // componentDidUpdate (prevProps) {
  //   if (prevProps.currentProductId !== this.props.currentProductId) {
  //     this.setState({
  //       productId: this.props.currentProductId
  //     }, () => {
  //       console.log('state.productId: ', this.state.productId)
  //       this.retrieveQuestions(this.state.productId)
  //         .then((results) => {
  //           console.log('results: ', results);
  //           this.setState({
  //             allQuestions: [...results],
  //             questions: [results[0], results[1]]
  //           }, () => {
  //             console.log('questions: ', this.state.questions);
  //             this.setState({
  //               lastIndex: 1
  //             })
  //           })
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     })
  //   }
  // }
  
  componentDidUpdate (prevProps) {
    if (prevProps.currentProductId !== this.props.currentProductId) {
      this.setState({
        productId: this.props.currentProductId
      }, () => {
        console.log('state.productId: ', this.state.productId)
        this.retrieveQuestions(this.state.productId)
          .then((results) => {
            console.log('retrieved all questions ', results);
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
    return (
      <div id='QA' data-testid="test_questions">
        <h2>Have a question?</h2>
        <Search handleSearch={this.handleSearch.bind(this)} />
        
        {this.state.questions.length ? 
          <div>
             <QuestionList questions={this.state.questions} currentProductName={this.props.currentProductName} />
            {this.state.more || this.state.add ? <button onClick={this.toggleQuestionList.bind(this)}>MORE QUESTIONS</button> : <button onClick={this.toggleQuestionList.bind(this)}>COLLAPSE QUESTIONS</button>}
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