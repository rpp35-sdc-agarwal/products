import React from 'react';
import AnswerView from './AnswerView.jsx'


/*
  
*/
class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
    }
  }
  
  toggleExpand () {
    this.setState({
      expand: !this.state.expand
    })
  } 
  
  render() {
    let answerKeys = Object.keys(this.props.answers)
    if (!answerKeys.length) {
      return (
        <div className="answer-list">
          <div className="answer">
          <b>Answer:</b> No answers are available yet.
        </div>
        </div>
        
      )
    }
    if (answerKeys.length <= 2 || this.state.expand === true) {
      return (
        <div className='answer-list' data-testid='test-aswerlist'>
          {
          answerKeys.map((answerKey, i) => (
            <AnswerView answer={this.props.answers[answerKey]} key={i} />
          ))
        }
        {answerKeys.length > 2 ? <p onClick={this.toggleExpand.bind(this)} className='toggle-button'>COLLAPSE ANSWERS</p> : null}
        </div>
      )
    } else {
      return (
        <div className='answer-list' data-testid='test-aswerlist'>
          <AnswerView answer={this.props.answers[answerKeys[0]]} />
          <AnswerView answer={this.props.answers[answerKeys[1]]} />
          <p onClick={this.toggleExpand.bind(this)} className='toggle-button'>
            SHOW MORE ANSWERS
          </p>
        </div>
      )
    }
  }
}

export default AnswerList;