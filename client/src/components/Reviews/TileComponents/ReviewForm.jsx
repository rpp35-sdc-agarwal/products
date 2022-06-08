import React from 'react';
import Characteristics from '../ReviewComponents/Characteristics.jsx'
import axios from 'axios';

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
    this.characteristicSensor = this.characteristicSensor.bind(this);
    this.removePhotos = this.removePhotos.bind(this);
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

  characteristicSensor(e, rating) {
    var character = e.target.id;
    this.setState({ [character]: true, [character + 'Rating']: rating});
  }

  removePhotos(e) {
    e.preventDefault();
    e.target.previousSibling.value = null;
    this.setState({ photos: [] });
  }



  handleSubmit(e) {
    e.preventDefault();
    var email = this.state.email.toLowerCase().match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
    if( this.state.rating === 0 || this.state.recommend === null || this.state.count > 0 || this.state.reviewBody === '' || this.state.nickname === '' || !email ) {
      alert('Not all required fields are filled out');
      return;
    }
    var characteristics = {}
    var metaChar = this.props.metaData.characteristics;
    for (var character in metaChar) {
      characteristics[metaChar[character].id] = parseInt(this.state[character + 'Rating']);
    }

    var config = {
      url: 'http://localhost:3000/reviews',
      method: 'post',
      params: {
        product_id: this.props.product_id,
        rating: this.state.rating,
        summary: this.state.reviewSumm,
        body: this.state.reviewBody,
        recommend: this.state.recommend,
        name: this.state.nickname,
        email: this.state.email,
        photos: this.state.photos,
        characteristics: characteristics
      }
    }
    axios(config);


    //if any of the mandatory fields are not filled out prevent submission
    //create a message to be displayed for the user
    //if the email is not in the correct format
    //if the images are invalid and unable to be uploaded

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
      <div className="rev-popup">
        <div className="rev_modal_content">
          <span className="close" onClick={this.closePopup.bind(this)}>&times;</span>
          <h2>Write your review</h2>
          <h3>About the {'product name here'}</h3>
          <form className="">

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

              <Characteristics sensor={this.characteristicSensor} characteristicHandler={this.characteristicHandler} characteristics={this.props.metaData.characteristics}/>

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
              <button onClick={this.removePhotos}>REMOVE PHOTOS</button>
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
                <input type="email" maxLength="60" onChange={this.nameMailHandler} id="email" value={this.state.email}></input>
              </div>
            </fieldset>

            <button onClick={this.handleSubmit}>SUBMIT</button>
          </form>
        </div>
      </div>
    )
  }
}
//data url

export default ReviewForm;