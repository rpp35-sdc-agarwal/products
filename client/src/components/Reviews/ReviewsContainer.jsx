import React from 'react';
import Sort from './Sort.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import axios from 'axios';
//possible bootstrap styling

//make call for review metadata in this component
//pass it down to both product and rating breakdown



class ReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metaData: {},
      totalRevs: 0,
      filters: []
    }
    this.metaReq = this.metaReq.bind(this);
    this.totalRevs = this.totalRevs.bind(this);
    this.filterHandle = this.filterHandle.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.product_id !== this.props.product_id) {
      this.metaReq();
    }
  }

  totalRevs(data) {
    var ratings = data.ratings;
    var total = 0;
    for (var rating in ratings) {
      total += parseInt(ratings[rating]);
    }
    this.setState({ totalRevs: total })
  }

  metaReq() {
    var config = {
      method: 'get',
      url: 'http://localhost:3000/reviews/meta',
      params: {
        product_id: this.props.product_id
      }
    }
    axios(config)
      .then((data) => {
        this.setState({
          metaData: data.data
        }, () => {this.totalRevs(this.state.metaData)})
      })
      .catch((err) => { console.log(err) });
  }


  filterHandle(e) {
    //when a rating is clicked it will change the reviews in list
    console.log(e.target.className);
    //get the rating from the element that is clicked
    var rating = parseInt(e.target.className[0]);
    var filters = this.state.filters.slice();
    if (filters.includes(rating)) {
      var index = filters.indexOf(rating);
      filters.splice(index, 1);
    } else {
      filters.push(rating);
    }
    //set it to state here
    this.setState({ filters: filters });
  }

  resetFilters(e) {
    //when the reset button is pressed clear the array containing the filters
    this.setState({ filters: [] });
  }

  render() {
    return (
      <>
        <div data-testid="test_revContainer" className="reviews_container">
          <div className="breakdown_container">
            <div><h3>Ratings and Reviews</h3></div>
            <RatingBreakdown className= "" filters={this.state.filters} resetFilters={this.resetFilters} filterHandle={this.filterHandle} setAvg={this.props.setAvg} metaData={this.state.metaData}/>
            <ProductBreakdown metaData={this.state.metaData}/>
          </div>
          <Sort product_name={this.props.product_name} filter={this.state.filters} total={this.state.totalRevs} product_id={this.props.product_id} metaData={this.state.metaData}/>
        </div>
      </>
    )
  }
}

export default ReviewsContainer;