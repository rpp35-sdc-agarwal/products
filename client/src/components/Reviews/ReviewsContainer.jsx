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
      metaData: {}
    }
    this.metaReq = this.metaReq.bind(this);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.product_id !== this.props.product_id) {
      this.metaReq();
    }
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
        })
      })
      .catch((err) => { console.log(err) });
  }

  render() {
    return (
      <div data-testid="test_revContainer" className="ReviewsContainer">
        <RatingBreakdown setAvg={this.props.setAvg}metaData={this.state.metaData}/>
        <ProductBreakdown metaData={this.state.metaData}/>
        <Sort product_id={this.props.product_id}/>
      </div>
    )
  }
}

export default ReviewsContainer;