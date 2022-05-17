import React from 'react';
import AnswerView from './AnswerView.jsx'


/*
  
*/
class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  
  
  render() {
    return (
      <div className='answer-list'>
        {Object.keys(this.props.answers).map((answerKey, i) => (
          <AnswerView answer={this.props.answers[answerKey]} key={i} />
        ))}
      </div>
    )
  }
}

export default AnswerList;