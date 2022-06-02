import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      recommend: null,
      elements: [],
      count: 50,
      reviewSumm: '',
      reviewBody: '',
      characterDescribe: {
        Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
        Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
        Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Too wide'],
        Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
        Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
        Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
      }
    }
    this.renderCharacter = this.renderCharacter.bind(this);
    this.recommendHandler = this.recommendHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ratingHandler = this.ratingHandler.bind(this);
    this.characteristicHandler = this.characteristicHandler.bind(this);
    this.summaryHandler = this.summaryHandler.bind(this);
  }

  closePopup() {
    this.props.closePopup();
  }

  componentDidMount() {
    this.renderCharacter(this.props.metaData.characteristics);
  }

  characteristicHandler(e) {
    //change the newly created state for this characteristic into the value selected
    var characteristic = e.target.value.slice(1);
    this.setState({ [characteristic]: e.target.value.slice(0, 1) }, console.log(this.state[characteristic], characteristic))
  }

  summaryHandler(e) {
    this.setState({ reviewSumm: e.target.value });
  }

  recommendHandler(e) {
    if (e.target.value === 'yes') {
      this.setState({ recommend: true });
    } else {
      this.setState({ recommend: false });
    }
  }

  ratingHandler(e) {
    this.setState({ rating: e.target.value })
  }

  changeHandler(e) {
    this.setState({ reviewBody: e.target.value });
    if (e.target.value.length <= 50) {
      var newCount = 50 - e.target.value.length;
      this.setState({ count: newCount });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    //if any of the mandatory fields are not filled out prevent submission
    //if the email is not in the correct format
    //if the images are invalid and unable to be uploaded
    console.log(e);
  }

  renderCharacter(characters) {
    var elements = [];
    var newState = {};
    for (var character in characters) {
      var characteristic = (
        <div key={characters[character].id}>
          <div>{character}</div>
          <div>{this.state.characterDescribe[character][this.state[character]]}</div>
          <span>
            <input type="radio" name="character"  id="1" value={"1" + character} onClick={this.characteristicHandler}/>
            <label htmlFor="character">1</label>
          </span>
          <span>
            <input type="radio" name="character"  id="2" value={"2" + character} onClick={this.characteristicHandler}/>
            <label htmlFor="character">2</label>
          </span>
          <span>
            <input type="radio" name="character"  id="3" value={"3" + character} onClick={this.characteristicHandler}/>
            <label htmlFor="character">3</label>
          </span>
          <span>
            <input type="radio" name="character"  id="4" value={"4" + character} onClick={this.characteristicHandler}/>
            <label htmlFor="character">4</label>
          </span>
          <span>
            <input type="radio" name="character"  id="5" value={"5" + character} onClick={this.characteristicHandler}/>
            <label htmlFor="character">5</label>
          </span>
        </div>
      );
      newState[character] = 'None selected';
      elements.push(characteristic);
    }
    newState.elements = elements
    this.setState(newState);
  }

  render() {
    //a line of five stars will be the rating, click one and that one and all others to its left will be filled
    //radio button array to select yes or no to recommend the product
    //any of the characteristics that are applicable to this product will appear here
    if (this.state.count > 0) {
      var charCount = <>Requires {this.state.count} more characters.</>
    } else {
      var charCount = <>Minimum character count reached</>
    }

    switch(this.state.rating) {
      case '0':
        var rateDescribe = null;
        break;
      case '1':
        var rateDescribe = 'Poor';
        break;
      case '2':
        var rateDescribe = 'Fair';
        break;
      case '3':
        var rateDescribe = 'Average';
        break;
      case '4':
        var rateDescribe = 'Good';
        break;
      case '5':
        var rateDescribe = 'Great';
        break;

    }


    return (
      <div className="rev-popup" id="rev-modal">
        <div className="modal_content">
          <span className="close" onClick={this.closePopup.bind(this)}>&times;</span>
          <h2>Write your review</h2>
          <h3>About the {'product name here'}</h3>
          <form>
            <fieldset>
              <legend>What would you rate this product?</legend>
              <input type="range" name="overall-rating" min="1" max="5" value={this.state.rating} onChange={this.ratingHandler}></input>{ rateDescribe }

            </fieldset>
            <fieldset>
              <legend>Do you recommend this product?</legend>
              <div>
                <input type="radio" name="recommended" onClick={this.recommendHandler} id="recommended" value="yes"/>
                <label htmlFor="recommended">Yes</label>
              </div>
              <div>
                <input type="radio" name="recommended" onClick={this.recommendHandler} id="!recommended" value="no"/>
                <label htmlFor="recommended">No</label>
              </div>
            </fieldset>
            <fieldset>
              <legend>How would you rate these characteristics?</legend>
              {this.state.elements.map((element) => {
                return element;
              })}
            </fieldset>
            <fieldset>
              <div>
                <label htmlFor="summary">Summarize your thoughts</label>
              </div>
              <div>
                <input type="text" name="summary" onChange={this.summaryHandler} value={this.state.reviewSumm}></input>
              </div>
              <input type="text" minLength={this.state.count} maxLength="1000" placeholder="Why did you like the product or not?" onChange={this.changeHandler} value={this.state.reviewBody}></input>
              <div>
                { charCount }
              </div>
            </fieldset>
            <fieldset>
              <legend>Photos</legend>
              <input type="file" name="photos" accept="image.jpg" multiple={true}/>
            </fieldset>
            <fieldset>
              <legend>Enter your nickname</legend>
              <div>
                <input type="text" maxLength="60"></input>
              </div>
            </fieldset>
            <fieldset>
              <legend>Enter your email</legend>
              <div>
                <input type="text" maxLength="60"></input>
              </div>
            </fieldset>
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ReviewForm;