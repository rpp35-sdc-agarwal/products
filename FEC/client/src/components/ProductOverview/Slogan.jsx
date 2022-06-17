import React from 'react';

class Slogan extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productInfo: this.props.productInfo
    }
  }

  render() {
    return(
      <div id='sloganDiv' className='childDiv'>
        <div id='desDiv'>
          <h3>
            {this.state.productInfo.slogan}
          </h3>
          <p>
            {this.state.productInfo.description}
          </p>
        </div>
        <div id='featuresDiv'>
          <h3>Item Details</h3>
          {this.state.productInfo.features.map((item, index) =>
            <li key = {index}>
              {item.feature}: {item.value}
            </li>
          )}
        </div>
      </div>
    )
  }
}

export default Slogan;