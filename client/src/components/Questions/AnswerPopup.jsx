import React from 'react';

class AnswerPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  closePopup () {
    this.props.toggleAnswer();
  }
  
  render() {
    return(
      <div className='modal' id='answer-modal'>
        <div className="modal_content">
          <span className="close" onClick={this.closePopup.bind(this)}>&times;</span>
          <p>I'm A Pop Up!!!</p>
        </div>
      </div>
    )
  }
}

export default AnswerPopup;