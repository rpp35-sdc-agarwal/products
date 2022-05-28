import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    //when button is clicked pop up form
  }

  render() {
    return (
      <div data-testid="test_revList" className="List">
        List
        <div>
          {this.props.reviews.map((review) => {
            return (
              <div key={review.review_id} className="rev-tile">
                <div className="rev-stars">{review.rating} <span className="rev-username rev-date">{review.reviewer_name} {review.date.slice(0, 10)}</span></div>
                <div className="rev-summary">{review.summary}</div>
                <div className="rev-body">{review.body}</div>
                <div className="rev-response">{review.response}</div>
                <div className="rev-helpfulness">{review.helpfulness} people found this review helpful</div>
              </div>
            )
          })}
        </div>
       <button>More Reviews</button><button>Write A Review</button>
      </div>
    )
  }
}

export default List;