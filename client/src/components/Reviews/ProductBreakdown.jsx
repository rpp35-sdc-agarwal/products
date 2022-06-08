import React from 'react';
import { sampleMeta } from './SampleData.js';

class ProductBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metaData: null,
      categories: []
    }
  }

  componentDidUpdate(oldProps) {
    if (oldProps.metaData !== this.props.metaData) {
      this.setState({
        metaData: this.props.metaData
      }, () => {this.setState({categories: Object.entries(this.state.metaData.characteristics)})});
    }
  }

  render() {
    //iterate through the characteristics object
    //render a div with each category as the header and the
    //corresponding value as a percentage

    //Size, Width, Comfort, Quality, Length, and Fit
    //iterate throught the metadata object
    //find out which categories are included in the metadata
    //render the proper components corresponding to the categories
    var descriptors = {
      Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
      Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
      Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
      Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
      Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
      Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
    }

    return (
      <div data-testid="test_revProductBreakdown" className="ProductBreakdown">
        ProductBreakdown
        {this.state.categories.map((cat) => {
          if (cat[1].value === null) {
            var rating = 0;
          } else {
            var rating = (parseInt(cat[1].value) / 5) * 100;
          }
          return (
            <div key={cat[1].id}>
              {cat[0]} <span className={cat[0].toLowerCase()}>{rating}</span>
              <div>
                {descriptors[cat[0]][0]}<span>{descriptors[cat[0]][4]}</span>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ProductBreakdown;