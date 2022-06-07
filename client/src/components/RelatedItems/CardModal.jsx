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
    var overviewProduct = this.props.overviewProduct;

    var combinedFeatures = {}



    var modalFeatures = modalData['features'];
    for (var i = 0; i < modalFeatures.length; i++) {
      var feature = modalFeatures[i]['feature']
      var modalValue = modalFeatures[i]['value']
      console.log('what is modalValue', modalValue)

      if (modalValue !== null) {
        combinedFeatures[modalValue] = {
          'modalValue': true
        }
      }

    }

    var overviewFeatures = overviewProduct['features'];
    for (var i = 0; i < overviewFeatures.length; i++) {
      var feature = overviewFeatures[i]['feature']
      var overviewValue = overviewFeatures[i]['value']
      if (overviewValue !== null && combinedFeatures[overviewValue]) {
        combinedFeatures[overviewValue].overviewValue = true
      } else if (overviewValue !== null){
        combinedFeatures[overviewValue] = {
          'overviewValue': true
        }
      }

    }

    for (var k in combinedFeatures) {
      modalElements.push(
        <ModalElement k={k}
        modalValue={combinedFeatures[k].modalValue}
        overviewValue={combinedFeatures[k].overviewValue} />
      )
    }

    console.log('what are conbined features', combinedFeatures)
    return(
      <div className="modal-card" data-testid="test-modal">
        <span className="close" onClick={this.closePopup.bind(this)}>&times;</span>
        <table>
          <tr>
            <th>{this.props.overviewProduct.name}</th>
            <th></th>
            <th>{this.props.modalData.name}</th>
          </tr>
          <tbody>{modalElements}</tbody>

        </table>
      </div>

    )
  }
}

export default CardModal;