import React from 'react';
// import './styles/Questions.css'

class CardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  closePopup () {
    this.props.toggleModal();
  }

  render() {
    return(
      <div className="modal-card">
        {/* <span className="close" onClick={this.closePopup.bind(this)}>&times;</span> */}
        <p>hello from modal</p>
        <p>more text from modal hi hi hi</p>
      </div>

    )
  }
}

export default CardModal;