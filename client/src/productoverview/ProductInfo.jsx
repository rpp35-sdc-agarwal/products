import React from 'react';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: this.props.productInfo,
      currentStyle: this.props.currentStyle,
    }
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      currentStyle: props.currentStyle
    })
  }


  render() {
    let salePriceHTML = <div><s>${this.state.currentStyle.sale_price}</s> <a style={{color: 'red'}}>${this.state.currentStyle.original_price}</a></div>
    let originPriceHTML = <div>${this.state.currentStyle.original_price}</div>
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
        <div>
          {this.state.currentStyle.sale_price? salePriceHTML : originPriceHTML}
        </div>
      </div>
    )
  }
}

export default ProductInfo;