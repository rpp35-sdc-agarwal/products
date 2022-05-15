import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import sampleData from '/Users/xuenjie/Fec/sampleData.js';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: sampleData
    }
  }

  render() {
    return(
      <div>
        Product Overview
        <ImageGallery styles = {this.state.data.productStyles.results}/>
        <ProductInfo />
        <StyleSelector />
        <AddToCart />
      </div>
    )
  }
}

export default ProductOverview;