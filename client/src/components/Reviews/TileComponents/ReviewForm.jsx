import React from 'react';
import Characteristics from '../ReviewComponents/Characteristics.jsx'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      recommend: null,
      photos: [],
      count: 50,
      reviewSumm: '',
      reviewBody: '',
      nickname: '',
      email: '',
      Size:'None selected',
      Width:'None selected',
      Comfort:'None selected',
      Quality:'None selected',
      Length:'None selected',
      Fit:'None selected',
      SizeRating: null,
      WidthRating: null,
      ComfortRating: null,
      QualityRating: null,
      LengthRating: null,
      FitRating: null
    }
    this.recommendHandler = this.recommendHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ratingHandler = this.ratingHandler.bind(this);
    this.summaryHandler = this.summaryHandler.bind(this);
    this.photoHandler = this.photoHandler.bind(this);
    this.nameMailHandler = this.nameMailHandler.bind(this);
    this.characteristicHandler = this.characteristicHandler.bind(this);
  }

  closePopup() {
    this.props.closePopup();
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

  photoHandler(e) {
    var result = [];
    for (var i = 0; i < e.target.files.length; i++) {
      result.push(URL.createObjectURL(e.target.files[i]));
    }
    this.setState({ photos: result })
  }

  nameMailHandler(e) {
    if (e.target.id === 'nickname') {
      this.setState({ nickname: e.target.value });
    } else {
      this.setState({ email: e.target.value });
    }
  }

  characteristicHandler(e) {
    var character = e.target.id;
    var value = e.target.value.slice(1);
    var rateName = e.target.id + 'Rating';
    var rating = e.target.value.slice(0, 1);
    console.log(e.target.value, e.target.id, e.target.character)
    this.setState({
      [character]: value,
      [rateName]: rating
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    //if any of the mandatory fields are not filled out prevent submission
    //create a message to be displayed for the user
    //if the email is not in the correct format
    //if the images are invalid and unable to be uploaded
    console.log(e);
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
              <Characteristics characteristicHandler={this.characteristicHandler} characteristics={this.props.metaData.characteristics}/>
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
              <input type="file" name="photos" accept="image.jpg" multiple={true}  onChange={this.photoHandler}/>
              {this.state.photos.map((photo) => {
                return (<img className="imgRev" src={photo}></img>);
              })}
            </fieldset>
            <fieldset>
              <legend>Enter your nickname</legend>
              <div>
                <input type="text" maxLength="60" onChange={this.nameMailHandler} id="nickname"  value={this.state.nickname}></input>
              </div>
            </fieldset>
            <fieldset>
              <legend>Enter your email</legend>
              <div>
                <input type="text" maxLength="60" onChange={this.nameMailHandler} id="email" value={this.state.email}></input>
              </div>
            </fieldset>
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
//data url

export default ReviewForm;