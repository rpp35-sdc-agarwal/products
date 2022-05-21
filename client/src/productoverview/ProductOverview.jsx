import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import sampleData from '/Users/xuenjie/Fec/sampleData.js';
import Slogan from './Slogan.jsx';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: sampleData
    }
  }

  render() {
    return(
      <div id='container'>
        <ImageGallery styles = {this.state.data.productStyles.results}/>
        <ProductInfo productInfo = {this.state.data.productInfo} styles = {this.state.data.productStyles.results}/>
        <StyleSelector />
        <AddToCart />
        <Slogan productInfo = {this.state.data.productInfo}/>
      </div>
    )
  }
}

export default ProductOverview;