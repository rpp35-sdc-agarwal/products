import React from 'react';
import AnswerView from './AnswerView.jsx'
import API from '../../../../config.js';
import axios from 'axios';

/*
  
*/
class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      expand: false,
    }
  }
  
  async retrieveAnswers (questionId) {
    let options = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${questionId}/answers/?count=100`,
      headers: {
        'Authorization': API
      }
    }

    let res = await axios(options);
    return res.data.results;
  }
  
  componentDidMount () {
   this.retrieveAnswers(this.props.questionId)
    .then((data) => {
      this.setState({
        answers: [...data]
      })
    });
  }
  
  toggleExpand () {
    this.setState({
      expand: !this.state.expand
    })
  } 
  
  render() {
    // let answerKeys = Object.keys(this.props.answers)
    let answers = this.state.answers;
    if (!answers.length) {
      return (
        <div className="answer-list">
          <div className="answer">
          <b>Answer:</b> No answers are available yet.
        </div>
        </div>
        
      )
    }
    if (answers.length <= 2 || this.state.expand === true) {
      return (
        <div className='answer-list' data-testid='test-aswerlist'>
          {
          answers.map((answer, i) => (
            <AnswerView answer={answer} key={i} />
          ))
        }
        {answers.length > 2 ? <p onClick={this.toggleExpand.bind(this)} className='toggle-button'>COLLAPSE ANSWERS</p> : null}
        </div>
      )
    } else {
      return (
        <div className='answer-list' data-testid='test-aswerlist'>
          <AnswerView answer={answers[0]} />
          <AnswerView answer={answers[1]} />
          <p onClick={this.toggleExpand.bind(this)} className='toggle-button'>
            SHOW MORE ANSWERS
          </p>
        </div>
      )
    }
  }
}

export default AnswerList;