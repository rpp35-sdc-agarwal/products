import React from 'react';
import List from './List.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx'
//possible bootstrap styling

//make call for review metadata in this component
//pass it down to both product and rating breakdown

function ReviewsContainer(props) {
  return (
    <div>
      <RatingBreakdown />
      <ProductBreakdown />
      <List />
    </div>
  )
}

export default ReviewsContainer;