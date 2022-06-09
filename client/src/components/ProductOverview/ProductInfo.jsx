import React from 'react';
import StarRating from '../RelatedItems/StarRating.jsx';
import {Link} from 'react-scroll';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: this.props.productInfo,
      currentStyle: this.props.currentStyle,
      avgRating: this.props.avgRating,
      totalReviews: this.props.totalRevs
    }
  }

  UNSAFE_componentWillReceiveProps(props) {
    let ratingPercentage = (Number(props.avgRating)/5*100).toString() + '%';
    this.setState({
      currentStyle: props.currentStyle,
      avgRating: ratingPercentage,
      productInfo: props.productInfo,
      totalReviews: props.totalRevs
    })
  }


  render() {
    let salePriceHTML = <div><s>${this.state.currentStyle.original_price}</s> <a style={{color: 'red'}}>${this.state.currentStyle.sale_price}</a></div>
    let originPriceHTML = <div>${this.state.currentStyle.original_price}</div>
    return(
      <div className='childDiv'>
        <div>
          <StarRating rating={this.state.avgRating}/>
          <p className='ovReview'><Link activeClass="active" to="ReviewsContainer" spy={true} smooth={true}> read all {this.state.totalReviews} Reviews</Link></p>
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