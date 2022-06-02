import React from 'react';
import API from '../../../../config.js';
import axios from 'axios';

class QuestionPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      nickname: '',
      email: '',
      submitted: false,
    }
  }
  
  closePopup () {
    this.props.toggleQuestion();
  }
  
  handleQuestionInput (e) {
    this.setState({
      question: e.target.value
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
  
  async submitQuestion(e) {
    e.preventDefault();
    
    if (!this.state.question) {
      alert('Please enter your question');
    } else if (!this.state.nickname) {
      alert('Please enter your nickname');
    } else if (!this.state.email) {
      alert('Please enter your email');
    } else if (!this.validateEmail(this.state.email)) {
      alert('Please enter a valid email address')
    } else {
      try {
        let data = {
          body: this.state.question,
          name: this.state.nickname,
          email: this.state.email,
          product_id: Number(this.props.productId)
        }
        let options = {
          method: 'post',
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/`,
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
        this.props.retrieveQuestions();
      })
    }
  }
  
  /* 
    Question Pop Up Field
    - Your Question
    - What is your nickname 
      * upto 60 characters
      * Placeholder text should read: “Example: jackson11!”
      * Below this field, the text “For privacy reasons, do not use your full name or email address” will appear
    - Your Email
  */
  render() {
    return(
      <div className="QA-modal" id="question-modal">
        <div className="modal_content">
          <span className="close" onClick={this.closePopup.bind(this)}>&times;</span>
          <div className="QA-form">
          <h4 className="QA-title">Post Your Question</h4>
          <p className="QA-subtitle">About the {this.props.currentProductName}</p>
          <form>
            <label className="QA-label">Your Question*</label>
            <textarea type="text" className="QA-input" maxLength="1000" placeholder="please enter your question" onChange={this.handleQuestionInput.bind(this)} required></textarea>
            <label className="QA-label">Your Nickname*</label>
            <input type="text"className="QA-nickname" maxLength="60" onChange={this.handleNicknameInput.bind(this)} required></input>
            <p className="QA-reminder">For privacy reasons, do not use your full name or email address</p>
            <label className="QA-label">Your Email*</label>
            <input type="text" className="QA-email" onChange={this.handleEmailInput.bind(this)}required></input>
            <input type="submit" value="Submit" className="QA-submit" onClick={this.submitQuestion.bind(this)}></input>
            {this.state.submitted ? <p className="QA-reminder">Your question has been submitted successfully</p> : null}
          </form>
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionPopup;