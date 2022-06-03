import React from 'react';
import AnswerPhoto from './AnswerPhoto.jsx';
import API from '../../../../config.js';
import axios from 'axios';

/*

*/
class AnswerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulness: props.answer.helpfulness,
      reported: false
    }
  }
  
  async vote () {
    let options = {
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${this.props.answer.answer_id}/helpful`,
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
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${this.props.answer.answer_id}/report`,
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
    console.log('answer: ', this.props.answer)
    return (
      <div className='answer' data-testid='test-answerview'>
        <b>Answer:</b> {this.props.answer.body}
        <div>
        {this.props.answer.photos.length !== 0 ? this.props.answer.photos.map((photo, i) => (
          <AnswerPhoto photo={photo} key={i} id={i} />
        )) : null}
        </div>
        <div className='answer-info'>
        <span>by {this.props.answer.answerer_name} </span> | <span> Helpful? </span><span className='answer-options' onClick={this.vote.bind(this)} > Yes ({this.state.helpfulness}) </span> | {this.state.reported ? <span className='answer-options'> Reported </span> : <span className='answer-options' onClick={this.report.bind(this)}> Report </span>}
        </div>
      </div>
    )
  }
}

export default AnswerView;