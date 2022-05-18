import React from 'react';
import AnswerList from './AnswerList.jsx';

/*
  AnswerList should display up to 2 answers by default
*/
class QuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  
  
  render() {
    return (
      <div>
        -------------------------------------------------
        <div className='question'>
          Q: {this.props.question.question_body} <span>Helpful? <a>Yes</a></span> | <span><a>Add Answer</a></span>
        </div>
        <div>
        <AnswerList answers={this.props.question.answers} />
        </div>
      </div>
    )
  }
}

export default QuestionView;