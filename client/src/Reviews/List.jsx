import React from 'react';
import sample from './SampleData.js';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: sample
    }
  }

  //call to the backend and store the returned data in state when the entire component mounts

  render() {
    return (
      <div>
        List
        {
        //dynamically render 2 tiles
        //create a More Reviews button (add functionality in next iteration)
        //create an add review button next to the more reviews button
       }
      </div>
    )
  }
}

export default List;