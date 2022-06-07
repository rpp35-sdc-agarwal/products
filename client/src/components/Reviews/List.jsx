import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.reviews !== this.props.reviews) {
      this.setState({
        render: []
      }, () => {this.addTwoRevs()})

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


  render() {
    return (
      <div data-testid="test_revList" className="List">
        List
        <div>
          {this.props.reviews.map((review) => {
            return (
              <div key={review.review_id} className="rev-tile">
                <div className="rev-stars">stars: {review.rating} <span className="rev-username rev-date"> {review.reviewer_name}, {this.formatDate(review.date)}</span></div>
                <div className="rev-summary"><b>{review.summary}</b></div>
                <div className="rev-body">
                  <Body body={review.body}/>
                  <Photos photos={review.photos}/>
                </div>
                <div>
                  {review.recommend ? 'checkmark I recommend this product' : ''}
                </div>
                <div className="rev-response">
                  <b>{review.response ? 'Response:' : ''}</b><br/>
                  {review.response}
                </div>
                <div className="rev-helpfulness">Helpful? <span>Yes ({review.helpfulness}) </span><span>| Report</span></div>
              </div>
            )
          })}
        </div>
       {moreRevs}<button onClick={this.clickHandler}>Write A Review</button>
       {this.state.form ? <ReviewForm product_id={this.props.product_id} closePopup={this.clickHandler} metaData={this.props.metaData}/> : null}
      </div>
    )
  }
}

export default List;