import React from 'react';
import List from './List.jsx';
import axios from 'axios';
import { sampleRev } from './SampleData.js';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      reviews: []
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.filterHandle = this.filterHandle.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
  }

  //Helpful - This sort order will prioritize reviews that have been found helpful.  The order can be found by subtracting “No” responses from “Yes” responses and sorting such that the highest score appears at the top.
  //Newest - This is a straightforward sort based on the date the review was submitted.  The most recent reviews should appear first.
  //Relevant - Relevance will be determined by a combination of both the date that the review was submitted as well as ‘helpfulness’ feedback received.  This combination should weigh the two characteristics such that recent reviews appear near the top, but do not outweigh reviews that have been found helpful.  Similarly, reviews that have been helpful should appear near the top, but should yield to more recent reviews if they are older.

  componentDidUpdate(oldProps) {
    if (oldProps.product_id !== this.props.product_id || oldProps.total !== this.props.total) {
      this.reviewReq()
    }
    if (oldProps.filter !== this.props.filter) {
      this.filterHandle(this.props.filter);
    }
  }

  filterHandle(filters) {
    //take in the array of filters
    //use the array to iterate through the reviews
    if (filters.length === 0) {
      this.resetFilters()
      return;
    }
    var result = [];
    var reviews = this.state.data.results;
    for (var i = 0; i < reviews.length; i++) {
      for (var j = 0; j < filters.length; j++) {
        if (reviews[i].rating === filters[j]) {
          result.push(reviews[i]);
          break;
        }
      }
    }
    //use this.state.reviews
    this.setState({ reviews: result });
    //create a new array with ratings that match the filters
  }

  resetFilters() {
    //when the button is clicked replace reviews with this.state.data.results
    this.setState({ reviews: this.state.data.results });
  }

  async reviewReq() {
    var config = {
      method: 'get',
      url: '/reviews',
      params: {
        filter: 'relevant',
        product_id: this.props.product_id,
        count: this.props.total
      }
    }
    await axios(config)
      .then((data) => {
        this.setState({
          data: data.data,
          reviews: data.data.results
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async changeHandler(e) {
    var filter = e.target.value;
    console.log(typeof filter);
      var config = {
        method: 'get',
        url: '/reviews',
        params: {
          filter: e.target.value,
          product_id: this.state.data.product,
          count: this.props.total
        }
      }
      await axios(config)
          .then((data) => {
        this.setState({
          data: data.data,
          reviews: data.data.results
        });
      })
        .catch((err) => {
          console.log(err);
        });
  }
  //all message management will be handled by sort.
  //messages will be passed down to list in the order that they should be rendered
  //list will then use the tile component to dynamically render the messages in the correct order

  render() {
    return (
      <div data-testid="test_revSort" className="rev_sort">
        <label htmlFor="sorter" className="rev-summary"><b>Sort By:</b></label>
        <select name="sorter" className="sort_select" onChange={this.changeHandler}>
            <option value="relevant">Relevant</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
        </select>
        <List product_name={this.props.product_name} product_id={this.props.product_id} reviews={this.state.reviews} metaData={this.props.metaData}/>
      </div>
    )
  }
}

export default Sort;