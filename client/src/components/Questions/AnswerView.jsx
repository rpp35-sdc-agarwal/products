import React from 'react';


/*

*/
class AnswerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  
  
  render() {
    return (
      <div className='answer'>
        A: {this.props.answer.body}
        <div className='answer-info'>
        <span>by {this.props.answer.answerer_name} </span> | <span>Helpful? <a>Yes</a></span> | <span><a>Report</a></span>
        </div>
        
      </div>
    )
  }
}

export default AnswerView;