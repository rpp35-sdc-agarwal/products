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

    for (var k in modalData) {

      if (k === 'name' || k === 'category') {
        var value = modalData[k]
        modalElements.push(
          <ModalElement k={k} modalValue={value}
          overviewValue={this.props.overviewProduct[k]}/>
        )
      }
    }

    var modalFeatures = modalData['features'];
    for (var i = 0; i < modalFeatures.length; i++) {
      var feature = modalFeatures[i]['feature']
      var modalValue = modalFeatures[i]['value']
      console.log('what is modalValue', modalValue)
      console.log('what is feature', feature)
      combinedFeatures[feature] = {
        'modalValue': modalValue
      }
    }

    var overviewFeatures = overviewProduct['features'];
    for (var i = 0; i < overviewFeatures.length; i++) {
      var feature = overviewFeatures[i]['feature']
      var overviewValue = overviewFeatures[i]['value']
      if (combinedFeatures[feature]) {
        combinedFeatures[feature].overviewValue = overviewValue
      } else {
        combinedFeatures[feature] = {
          'overviewValue': overviewValue
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