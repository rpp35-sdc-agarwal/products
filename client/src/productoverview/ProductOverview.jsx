import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        Product Overview
        <ImageGallery />
        <ProductInfo />
        <StyleSelector />
        <AddToCart />
      </div>
    )
  }
}

export default ProductOverview;