import React from 'react';
import AnswerPhoto from './AnswerPhoto.jsx';

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
      <div className='answer' data-testid='test-answerview'>
        <b>Answer:</b> {this.props.answer.body}
        {this.props.answer.photos.length !== 0 ? this.props.answer.photos.map((photo, i) => (
          <AnswerPhoto photo={photo} key={i} />
        )) : null}
        <div className='answer-info'>
        <span>by {this.props.answer.answerer_name} </span> | <span> Helpful? </span><span className='answer-options'> Yes ({this.props.answer.helpfulness}) </span> | <span className='answer-options'> Report </span>
        </div>
      </div>
    )
  }
}

export default AnswerView;