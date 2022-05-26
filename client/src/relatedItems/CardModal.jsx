import React from 'react';
// import './styles/Questions.css'
import ModalElement from './ModalElement.jsx'
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
    var modalElements = [];
    var modalData = this.props.modalData
    for (var k in modalData) {
      console.log('k', k)
      var value = modalData[k]
      console.log('value', value)
      if (k !== 'features') {
        modalElements.push(
          <ModalElement k={k} value={value} />
        )
      }


    }
    return(
      <div className="modal-card" data-testid="test-modal">
        <span className="close" onClick={this.closePopup.bind(this)}>&times;</span>
        <table>
          <tr>
            <th>Category</th>
            <th></th>
            <th>Category</th>
          </tr>
          <tbody>{modalElements}</tbody>

        </table>
      </div>

    )
  }
}

export default CardModal;