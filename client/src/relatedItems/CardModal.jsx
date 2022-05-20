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
      <div className="modal" >
        <div className="modal_content">
          <span className="close" onClick={this.closePopup.bind(this)}>&times;</span>
          <p>I'm A Pop Up!!!</p>
        </div>
      </div>
    )
  }
}

export default CardModal;