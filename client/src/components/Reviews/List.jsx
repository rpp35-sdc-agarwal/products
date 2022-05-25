import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: [],
      // numDisplayed: 2
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.addTwoRevs = this.addTwoRevs.bind(this);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.reviews !== this.props.reviews) {
      this.addTwoRevs();
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


  clickHandler() {
    //when button is clicked pop up form
  }

  //create a render key on state
  //this will contain the reviews to be rendered currently
  //initially store the first two reviews there
  //when show more is clicked it will render 2 more reviews by adding them to the render state


  render() {
    if (this.state.render.length === 0 || this.state.render.length === this.props.reviews.length) {
      var moreRevs = <span></span>
    } else {
      var moreRevs =  <button onClick={this.addTwoRevs}>More Reviews</button>
    }

    return (
      <div data-testid="test_revList" className="List">
        List
        <div>
          {this.state.render.map((review) => {
            return (
              <div key={review.review_id} className="rev-tile">
                <div className="rev-stars">{review.rating} <span className="rev-username rev-date">{review.reviewer_name} {review.date.slice(0, 10)}</span></div>
                <div className="rev-summary">{review.summary}</div>
                <div className="rev-body">
                  {review.body}
                  <div className="photos"></div>
                </div>
                <div className="rev-response">{review.response}</div>
                <div className="rev-helpfulness">{review.helpfulness} people found this review helpful</div>
              </div>
            )
          })}
        </div>
       {moreRevs}<button>Write A Review</button>
      </div>
    )
  }
}

export default List;