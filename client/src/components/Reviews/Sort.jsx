import React from 'react';
import List from './List.jsx';
import axios from 'axios';
import { sampleRev } from './SampleData.js';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: null,
      reviews: []
    }
    this.changeHandler = this.changeHandler.bind(this);
  }

  //Helpful - This sort order will prioritize reviews that have been found helpful.  The order can be found by subtracting “No” responses from “Yes” responses and sorting such that the highest score appears at the top.
  //Newest - This is a straightforward sort based on the date the review was submitted.  The most recent reviews should appear first.
  //Relevant - Relevance will be determined by a combination of both the date that the review was submitted as well as ‘helpfulness’ feedback received.  This combination should weigh the two characteristics such that recent reviews appear near the top, but do not outweigh reviews that have been found helpful.  Similarly, reviews that have been helpful should appear near the top, but should yield to more recent reviews if they are older.

  componentDidUpdate(oldProps) {
    if (oldProps.product_id !== this.props.product_id) {
      this.reviewReq(this.props.product_id)
    }
  }

  reviewReq(productId) {
    var config = {
      method: 'get',
      url: 'http://localhost:3000/reviews',
      params: {
        filter: 'relevant',
        product_id: this.props.product_id
      }
    }
    axios(config)
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

  changeHandler(e) {
    var filter = e.target.value;
    console.log('changed')
    if (filter === 'relevant') {
      var config = {
        method: 'get',
        url: 'http://localhost:3000/reviews',
        params: {
          filter: 'relevant',
          product_id: this.state.data.product
        }
      }
      axios(config)
          .then((data) => {
        this.setState({
          data: data.data,
          reviews: data.data.results
        });
      })
        .catch((err) => {
          console.log(err);
        });
    } else if (filter === 'helpful') {
      //sort so the reviews with the highest helpfulness are first
      var config = {
        method: 'get',
        url: 'http://localhost:3000/reviews',
        params: {
          filter: 'helpful',
          product_id: this.state.data.product
        }
      }
      axios(config)
          .then((data) => {
        this.setState({
          data: data.data,
          reviews: data.data.results
        });
      })
        .catch((err) => {
          console.log(err);
        });
    } else if (filter === 'newest') {
      //sort so the reviews that were created most recently are first
      var config = {
        method: 'get',
        url: 'http://localhost:3000/reviews',
        params: {
          filter: 'newest',
          product_id: this.state.data.product
        }
      }
      axios(config)
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
  }
  //all message management will be handled by sort.
  //messages will be passed down to list in the order that they should be rendered
  //list will then use the tile component to dynamically render the messages in the correct order

  render() {
    return (
      <div data-testid="test_revSort"className="Sort">
        <label htmlFor="sorter">Sort on:</label>
        <select name="sorter" onChange={this.changeHandler}>
            <option value="relevant">Relevant</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
        </select>
        <List reviews={this.state.reviews} metaData={this.props.metaData}/>
      </div>
    )
  }
}

export default Sort;