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
      helpfulness: props.question.question_helpfulness
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
    console.log('res: ', res);
    this.setState({
      helpfulness: this.state.helpfulness + 1
    })
  }
  
  render() {
    console.log('helpfulness: ', this.state.helpfulness)
    return (
      <div className="QA-container">
        <div className='question' data-testid="test_questionview">
          <b>Question:</b> {this.props.question.question_body} <span className='question-options'><span> Helpful? </span> <span className='question-clickable' onClick={this.vote.bind(this)} > Yes ({this.state.helpfulness}) </span> | <span onClick={this.addAnswer.bind(this)} className='question-clickable'>Add Answer</span></span>
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