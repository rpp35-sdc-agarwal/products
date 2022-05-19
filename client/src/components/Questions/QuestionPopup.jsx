import React from 'react';
// import './styles/Questions.css'

class QuestionPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  closePopup () {
    this.props.toggleQuestion();
  }
  
  render() {
    return(
      <div className="modal" id="question-modal">
        <div className="modal_content">
          <span className="close" onClick={this.closePopup.bind(this)}>&times;</span>
          <p>I'm A Pop Up!!!</p>
        </div>
      </div>
    )
  }
}

export default QuestionPopup;