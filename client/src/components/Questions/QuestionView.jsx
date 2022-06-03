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
      add: false
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
  
  render() {
    return (
      <div className="QA-container">
        <div className='question' data-testid="test_questionview">
          <b>Question:</b> {this.props.question.question_body} <span className='question-options'><span> Helpful? </span> <span className='question-clickable'> Yes ({this.props.question.question_helpfulness}) </span> | <span onClick={this.addAnswer.bind(this)} className='question-clickable'>Add Answer</span></span>
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