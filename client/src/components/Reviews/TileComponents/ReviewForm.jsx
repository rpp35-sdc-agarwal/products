import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

  }
  closePopup() {
    this.props.closePopup();
  }

  render() {
    return (
      <div className="rev-popup" id="rev-modal">
        <div className="modal_content">
          <span className="close" onClick={this.closePopup.bind(this)}>&times;</span>
          <h2>Write your review</h2>
          <h3>About the {'product name here'}</h3>
          <form></form>
        </div>
      </div>
    )
  }
}

export default ReviewForm;