import React from 'react';
import { sampleMeta } from './SampleData.js';

class ProductBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metaData: sampleMeta
    }
  }

  render() {
    //iterate through the characteristics object
    var categories = Object.entries(this.state.metaData.characteristics);
    //render a div with each category as the header and the
    //corresponding value as a percentage

    //Size, Width, Comfort, Quality, Length, and Fit

    return (
      <div>
        ProductBreakdown

        {/* {categories.map((cat) => {
          var rating = (parseInt(cat[1].value) / 5) * 100;
          return (
            <div key={cat[1].id}>
              {cat[0]} <span>{rating}</span>
            </div>
          )
        })} */}
      </div>
    )
  }
}

export default ProductBreakdown;