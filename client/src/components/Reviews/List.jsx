import React from 'react';
import Photos from './TileComponents/Photos.jsx';
import Body from './TileComponents/ReviewBody.jsx';
import axios from 'axios';
import ReviewForm from './TileComponents/ReviewForm.jsx';
import StarRating from '../RelatedItems/StarRating.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: [],
      form: false,

      // numDisplayed: 2
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.addTwoRevs = this.addTwoRevs.bind(this);
    this.formatDate = this.formatDate.bind(this);
    this.helpfulHandler = this.helpfulHandler.bind(this);
    this.reportHandler = this.reportHandler.bind(this);
    this.createResponse = this.createResponse.bind(this);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.reviews !== this.props.reviews) {
      this.setState({
          render: []
        }, () => {this.addTwoRevs()}
      );
      // console.log(this);
    }
  }


  addTwoRevs() {
    //measure the length of the render array
    var index = this.state.render.length;
    if (index === 0) {
      var newRender = this.props.reviews.slice(0, 2);
      this.setState({
        render: newRender
      })
    } else {
      //use this length - 1 as a starting index to copy two more reviews
      var newRender = this.props.reviews.slice(index, index + 2);
      //take two reviews from the props reviews and put them in render
      newRender = this.state.render.concat(newRender);
      this.setState({
        render: newRender
      })
    }
  }

  formatDate(date) {
    var months = {'01': 'January', '02': 'February', '03': 'March', '04': 'April', '05': 'May', '06': 'June', '07': 'July', '08': 'August', '09': 'September', '10': 'October', '11': 'November', '12': 'December'};
    var month = months[date.slice(5, 7)];
    var day = date.slice(8, 10);
    var year = date.slice(0, 4);
    date = `${month} ${day}, ${year}`
    return date;
  }

  async helpfulHandler(e) {
    //when the yes is clicked, disable the clickability of the yes element
    console.log('listening', e.target.innerHTML);
    this.setState({ [e.target.className]: true })
    //send a request to the api to mark the review as helpful
    var config = {
      url: `/reviews/${e.target.className}/helpful`,
      method: 'put'
    }
    await axios(config)
      .then((response) => { console.log(response) })
      .catch((err) => { console.log(err) });
  }

  async reportHandler(e) {
        //when the yes is clicked, disable the clickability of the yes element
        console.log('reporting', e.target.innerHTML);
        this.setState({ [e.target.className + 'Report']: true })
        //send a request to the api to mark the review as helpful
        var config = {
          url: `/reviews/${e.target.className}/report`,
          method: 'put'
        }
        await axios(config)
          .then((response) => { console.log(response) })
          .catch((err) => { console.log(err) });
  }

  clickHandler(e) {
    //when button is clicked pop up form
    this.setState({ form: !this.state.form })
  }

  createResponse(response) {
    return (
      <div className="rev-response tile_padding">
        <div><b>Response:</b></div>
        {response}
      </div>
    )
  }
  //create a render key on state
  //this will contain the reviews to be rendered currently
  //initially store the first two reviews there
  //when show more is clicked it will render 2 more reviews by adding them to the render state


  render() {
    if (this.state.render.length === 0 || this.state.render.length === this.props.reviews.length) {
      var moreRevs = <span></span>
    } else {
      var moreRevs =  <button className="general-button" onClick={this.addTwoRevs}>MORE REVIEWS</button>
    }
    //this.state[review.review_id] ? : null
    return (
      <div>
        <div data-testid="test_revList" className="rev_list">
          <div>
            {this.state.render.map((review) => {
              return (
                <div key={review.review_id} className="rev-tile">
                  <div className="rev-stars tile_padding"><StarRating rating={review.rating} /><span className="rev_tile_info tile_peripheral"> {review.reviewer_name}, {this.formatDate(review.date)}</span></div>
                  <div className="rev-summary tile_padding"><b>{review.summary}</b></div>
                  <div className="rev-body tile_padding">
                    <Body body={review.body}/>
                    <Photos photos={review.photos}/>
                  </div>
                  <div className="tile_padding">
                    {review.recommend ? 'checkmark I recommend this product' : ''}
                  </div>
                  {review.response ? this.createResponse(review.response) : null}
                  <div className="rev-helpfulness tile_padding tile_peripheral">
                    <span className="yes_padding">Helpful?</span>
                    <span className={review.review_id} onClick={!this.state[review.review_id] ? this.helpfulHandler : null}>
                       Yes ({review.helpfulness})
                    </span>
                    <span className={review.review_id} onClick={!this.state[review.review_id + 'Report'] ? this.reportHandler : null} > | Report</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {moreRevs}<button className="general-button" onClick={this.clickHandler}>WRITE A REVIEW</button>
        {this.state.form ? <ReviewForm product_name={this.props.product_name} product_id={this.props.product_id} closePopup={this.clickHandler} metaData={this.props.metaData}/> : null}
      </div>
    )
  }
}

export default List;