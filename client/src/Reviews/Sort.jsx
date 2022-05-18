import React from 'react';
import List from './List.jsx'
import { sampleRev } from './SampleData.js';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: sampleRev,
      reviews: sampleRev.results,
      filteredRevs: []
    }
    this.changeHandler = this.changeHandler.bind(this);
  }
  //Helpful - This sort order will prioritize reviews that have been found helpful.  The order can be found by subtracting “No” responses from “Yes” responses and sorting such that the highest score appears at the top.
  //Newest - This is a straightforward sort based on the date the review was submitted.  The most recent reviews should appear first.
  //Relevant - Relevance will be determined by a combination of both the date that the review was submitted as well as ‘helpfulness’ feedback received.  This combination should weigh the two characteristics such that recent reviews appear near the top, but do not outweigh reviews that have been found helpful.  Similarly, reviews that have been helpful should appear near the top, but should yield to more recent reviews if they are older.
  changeHandler(e) {
    var filter = e.target.value;

    if (filter === 'relevant') {

    } else if (filter === 'helpful') {
      //sort so the reviews with the highest helpfulness are first
    } else if (filter === 'newest') {
      //sort so the reviews that were created most recently are first
    }
  }
  //all message management will be handled by sort.
  //messages will be passed down to list in the order that they should be rendered
  //list will then use the tile component to dynamically render the messages in the correct order

  render() {
    return (
      <div className="Sort">
        <label htmlFor="sorter">Sort on:</label>
        <select name="sorter" onChange={this.changeHandler}>
            <option value="relevant">Relevant</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
        </select>
        <List filteredRevs={filteredRevs}/>
      </div>
    )
  }
}

export default Sort;