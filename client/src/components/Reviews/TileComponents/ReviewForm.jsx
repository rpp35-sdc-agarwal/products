import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.renderCharacter = this.renderCharacter.bind(this);
  }

  closePopup() {
    this.props.closePopup();
  }

  renderCharacter(characters) {
    var elements = [];
    for (var character in characters) {
      var characteristic = (
        <div>{character}</div>
      );
      elements.push(characteristic);
    }
    return elements;
  }

  render() {
    //a line of five stars will be the rating, click one and that one and all others to its left will be filled
    //radio button array to select yes or no to recommend the product
    //any of the characteristics that are applicable to this product will appear here
    return (
      <div className="rev-popup" id="rev-modal">
        <div className="modal_content">
          <span className="close" onClick={this.closePopup.bind(this)}>&times;</span>
          <h2>Write your review</h2>
          <h3>About the {'product name here'}</h3>
          <form>
            <fieldset>
              <legend>What would you rate this product?</legend>
              <input type="range" name="overall-rating" min="0" max="5"></input>
            </fieldset>
            <fieldset>
              <legend>Do you recommend this product?</legend>
              <div>
                <input type="radio" name="recommended" id="recommended" value="yes"/>
                <label htmlFor="recommended">Yes</label>
              </div>
              <div>
                <input type="radio" name="recommended" id="!recommended" value="no"/>
                <label htmlFor="recommended">No</label>
              </div>
            </fieldset>
            <fieldset>
              <legend>How would you rate these characteristics?</legend>
              {this.renderCharacter(this.props.metaData.characteristics).map((element) => {
                return element;
              })}
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

export default ReviewForm;