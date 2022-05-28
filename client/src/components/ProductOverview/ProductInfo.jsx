import React from 'react';
import StarRating from '../RelatedItems/StarRating.jsx';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: this.props.productInfo,
      currentStyle: this.props.currentStyle,
      avgRating: ''
    }
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      currentStyle: props.currentStyle,
      avgRating: props.avgRating
    })
  }


  render() {
    let salePriceHTML = <div><s>${this.state.currentStyle.original_price}</s> <a style={{color: 'red'}}>${this.state.currentStyle.sale_price}</a></div>
    let originPriceHTML = <div>${this.state.currentStyle.original_price}</div>
    let ratingPercentage = (Number(this.state.avgRating)/5*100).toString() + '%';
    return(
      <div className='childDiv'>
        <div>
          <StarRating rating={ratingPercentage}/>{ratingPercentage} read all [#] Reviews
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