import React from 'react';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: this.props.productInfo
    }
  }

  render() {
    return(
      <div className='childDiv'>
        <div>
          Stars read all [#] Reviews
        </div>
        <div>
          Category: {this.state.productInfo.category}
        </div>
        <div>
          <h1>
            {this.state.productInfo.name}
          </h1>
        </div>
      </div>
    )
  }
}

export default ProductInfo;