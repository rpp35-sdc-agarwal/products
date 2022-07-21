import React from 'react';
import AnswerList from './AnswerList.jsx';
import AnswerPopup from './AnswerPopup.jsx';
import API from '../../../../config.js';
import axios from 'axios';

/*
  AnswerList should display up to 2 answers by default
*/
class QuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      add: false,
      helpfulness: props.question.question_helpfulness,
      reported: props.question.reported
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
   this.retrieveAnswers(this.props.question.question_id)
    .then((data) => {
      this.setState({
        answers: [...data]
      })
    });
  }
  
  addAnswer () {
    this.setState({
      add: !this.state.add
    })
  }
  
  async vote () {
    let options = {
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${this.props.question.question_id}/helpful`,
      headers: {
        'Authorization': API
      }
    }

    let res = await axios(options);
    this.setState({
      helpfulness: this.state.helpfulness + 1
    })
  }
  
  async report () {
    let options = {
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${this.props.question.question_id}/report`,
      headers: {
        'Authorization': API
      }
    }

    let res = await axios(options);
    this.setState({
      reported: true
    })
  }
  
  render() {
    
    return (
      <div className="QA-container">
        <div className='question' data-testid="test_questionview">
          <span className="question-body"><b>Question:</b> {this.props.question.question_body}</span><span className='question-options'><span> Helpful? </span> <span className='question-clickable' onClick={this.vote.bind(this)} > Yes ({this.state.helpfulness}) </span> | <span onClick={this.addAnswer.bind(this)} className='question-clickable'>Add Answer</span> | {this.state.reported ? <span className="QA-Report">Reported</span> : <span className="QA-Report, question-clickable" onClick={this.report.bind(this)} >Report</span>}</span>
        </div>
        {this.state.add ? <AnswerPopup currentProductName={this.props.currentProductName} questionId={this.props.question.question_id} toggleAnswer={this.addAnswer.bind(this)} retrieveAnswers={this.retrieveAnswers.bind(this)} /> : null}
        <div>
        <AnswerList  answers={this.state.answers} />
        </div>
      </div>
    )
  }
}

export default QuestionView;