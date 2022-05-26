import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import sampleData from '../../../sampleData.js';
import Slogan from './Slogan.jsx';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: sampleData,
      currentStyle: sampleData.productStyles.results[0]
    }
  }

  render() {
    return(
      <div id='container' data-testid="test_poContainer">
        <ImageGallery currentStyle = {this.state.currentStyle}/>
        <ProductInfo productInfo = {this.state.currentProduct.productInfo} currentStyle = {this.state.currentStyle}/>
        <StyleSelector styles = {this.state.currentProduct.productStyles.results} currentStyle = {this.state.currentStyle}/>
        <AddToCart currentStyle = {this.state.currentStyle}/>
        <Slogan productInfo = {this.state.currentProduct.productInfo}/>
      </div>
    )
  }
}

export default ProductOverview;