import React from 'react';


class QuestionPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  closePopup () {
    this.props.toggleQuestion();
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
            <label className="QA-label">Your Question</label>
            <textarea type="text" className="QA-input" maxLength="1000"></textarea>
            <label className="QA-label">Your Nickname</label>
            <input type="text"className="QA-nickname" maxLength="60" ></input>
            <p className="QA-reminder">For privacy reasons, do not use your full name or email address</p>
            <label className="QA-label">Your Email</label>
            <input type="text" className="QA-email"></input>
            <input type="submit" value="Submit" className="QA-submit"></input>
          </form>
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionPopup;