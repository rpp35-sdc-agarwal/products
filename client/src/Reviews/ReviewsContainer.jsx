import React from 'react';
import List from './List.jsx';
import Breakdown from './Breakdown.jsx';
//possible bootstrap styling

function ReviewsContainer(props) {
  return (
    <div>
      <Breakdown />
      <List />
      {
        //breakdown
        //list
      }
    </div>
  )
}

export default ReviewsContainer;