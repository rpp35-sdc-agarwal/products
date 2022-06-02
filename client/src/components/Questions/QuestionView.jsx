import React from 'react';
import AnswerList from './AnswerList.jsx';
import AnswerPopup from './AnswerPopup.jsx'

/*
  AnswerList should display up to 2 answers by default
*/
class QuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      add: false
    }
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
        {this.state.add ? <AnswerPopup toggleAnswer={this.addAnswer.bind(this)}/> : null}
        <div>
        <AnswerList answers={this.props.question.answers} />
        </div>
      </div>
    )
  }
}

export default QuestionView;