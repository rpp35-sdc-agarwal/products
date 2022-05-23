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
      currentProduct: sampleData
    }
  }

  render() {
    return(
      <div id='container' data-testid="test_poContainer">
        <ImageGallery styles = {this.state.currentProduct.productStyles.results}/>
        <ProductInfo productInfo = {this.state.currentProduct.productInfo} styles = {this.state.currentProduct.productStyles.results}/>
        <StyleSelector styles = {this.state.currentProduct.productStyles.results}/>
        <AddToCart />
        <Slogan productInfo = {this.state.currentProduct.productInfo}/>
      </div>
    )
  }
}

export default ProductOverview;