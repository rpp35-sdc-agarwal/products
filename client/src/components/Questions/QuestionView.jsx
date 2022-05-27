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
      <div>
        -------------------------------------------------
        <div className='question' data-testid="test_questionview">
          Q: {this.props.question.question_body} <span>Helpful? <a>Yes</a></span> | <span onClick={this.addAnswer.bind(this)}>Add Answer</span>
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