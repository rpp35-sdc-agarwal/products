import React from 'react';
import Sort from './Sort.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx'
//possible bootstrap styling

//make call for review metadata in this component
//pass it down to both product and rating breakdown

function ReviewsContainer(props) {
  return (
    <div data-testid="test_revContainer" className="ReviewsContainer">
      <RatingBreakdown />
      <ProductBreakdown />
      <Sort product_id={props.product_id}/>
    </div>
  )
}

export default ReviewsContainer;