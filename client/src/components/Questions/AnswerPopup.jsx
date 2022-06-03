import React from 'react';
import API from '../../../../config.js';
import axios from 'axios';

class AnswerPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      nickname: '',
      email: '',
      photos: [],
      submitted: false,
    }
  }
  
  closePopup () {
    this.props.toggleAnswer();
  }
  
  handleAnswerInput (e) {
    this.setState({
      answer: e.target.value
    })
  }
  
  handleNicknameInput (e) {
    this.setState({
      nickname: e.target.value
    })
  }
  
  handleEmailInput (e) {
    this.setState({
      email: e.target.value
    })
  }
  
  validateEmail (email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
      return true;
    } else {
      return false;
    }
  }
  
  handlePhotoUpload (e) {
    this.setState({
      photos: [...e.target.files]
    })
  }
  
  async submitAnswer(e) {
    e.preventDefault();
    
    if (!this.state.answer) {
      alert('Please enter your answer');
    } else if (!this.state.nickname) {
      alert('Please enter your nickname');
    } else if (!this.state.email) {
      alert('Please enter your email');
    } else if (!this.validateEmail(this.state.email)) {
      alert('Please enter a valid email address')
    } else {
      try {
        let data = {
          body: this.state.answer,
          name: this.state.nickname,
          email: this.state.email,
          photos: this.state.photos
        }
        
        console.log('data in answerPopUp: ', data);
        console.log('this.props.questionId: ', this.props.questionId)
        let options = {
          method: 'post',
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${this.props.questionId}/answers`,
          data,
          headers: {
            'Authorization': API,
            'Content-Type': 'application/json'
          }
        }
        
        let res = await axios(options);
        console.log(res);
        // return res.data.results;
      } catch (err) {
        console.log(err);
      }
      
      this.setState({
        submitted: true
      }, ()=>{
        this.props.retrieveAnswers(this.props.questionId);
      })
    }
  }
  
  /*
     Answer Pop Up Field
    - Your Answer
    - What is your nickname 
      * upto 60 characters
      * Placeholder text should read: “Example: jackson11!”
      * Below this field, the text “For privacy reasons, do not use your full name or email address” will appear
    - Your Email
    - Upload your photos
  */
  
  render() {
    
    return(
      <div className='QA-modal' id='answer-modal'>
        <div className="modal_content">
          <span className="close" onClick={this.closePopup.bind(this)}>&times;</span>
          <div className="QA-form">
          <h4 className="QA-title">Post Your Answer</h4>
          <p className="QA-subtitle">About the {this.props.currentProductName}</p>
          <p>* Required</p>
          <form>
            <label className="QA-label">Your Answer*</label>
            <textarea type="text" className="QA-input" maxLength="1000" placeholder="Please enter your question" onChange={this.handleAnswerInput.bind(this)} required></textarea>
            <label className="QA-label">Your Nickname*</label>
            <input type="text"className="QA-nickname" maxLength="60" placeholder="Example: jack543!" onChange={this.handleNicknameInput.bind(this)} required></input>
            <p className="QA-reminder">For privacy reasons, do not use your full name or email address</p>
            <label className="QA-label">Your Email*</label>
            <input type="text" className="QA-email" placeholder="Example: jack@email.com”" onChange={this.handleEmailInput.bind(this)}required></input>
            <label className="answer-photo">Upload Your Photos</label>
            <input className="answer-photo-upload" type="file" multiple onChange={this.handlePhotoUpload.bind(this)} />
            <input type="submit" value="Submit" className="QA-submit" onClick={this.submitAnswer.bind(this)}></input>
            {this.state.submitted ? <p className="QA-reminder">Your answer has been submitted successfully</p> : null}
          </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AnswerPopup;