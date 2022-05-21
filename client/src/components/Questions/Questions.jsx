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
      questions: [],
      search: '',
      add: false,
      productId: ''
    }
    this.retrieveQuestions = this.retrieveQuestions.bind(this);
  }

  async retrieveQuestions (productId) {
    let options = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/?product_id=${productId}`,
      headers: {
        'Authorization': API
      }
    }
    
    let res = await axios(options);
    return res.data.results;
  }

  componentDidUpdate (prevProps) {
    // console.log('currentProductId in componentDidUpdate: ', this.state.productId)
    if (prevProps.currentProductId !== this.props.currentProductId) {
      this.setState({
        productId: this.props.currentProductId
      }, () => {
        console.log('state.productId: ', this.state.productId)
        this.retrieveQuestions(this.state.productId)
          .then((results) => {
            console.log('results: ', results);
            this.setState({
              questions: [results[0], results[1]]
            }, () => {
              console.log('questions: ', this.state.questions)
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

  showMoreQuestions () {
    this.retrieveQuestions(this.state.productId)
      .then((data) => {
        console.log('data: ', data)
        
        this.setState({
          questions:[...data]
        })
      })
    
  }

  addQuestion () {
    this.setState({
      add: !this.state.add
    })
  }

  render() {
    console.log('in questions render')
    return (
      <div id='QA' data-testid="test_questions">
        Questions component placeholder
        <Search handleSearch={this.handleSearch.bind(this)} />
        <QuestionList questions={this.state.questions} />
        <button onClick={this.showMoreQuestions.bind(this)}>MORE ANSWERED QUESTIONS</button>
        <button onClick={this.addQuestion.bind(this)}>ADD A QUESTION +</button>
        <div>
          {this.state.add ? <QuestionPopup toggleQuestion={this.addQuestion.bind(this)} /> : null}
        </div>
      </div>
    )
  }
}

export default Questions;