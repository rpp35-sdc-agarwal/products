import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import sampleData from '../../../../sampleData.js';
import Slogan from './Slogan.jsx';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: sampleData,
      currentStyle: sampleData.productStyles.results[0]
    };
    this.handleStyleChange = this.handleStyleChange.bind(this);
  }

  handleStyleChange(styleId) {
    if (this.state.currentStyle.style_id === styleId) {
      return;
    }
    let styles = this.state.currentProduct.productStyles.results;
    let newStyle;
    for (let i = 0; i < styles.length; i++) {
      if (styles[i].style_id === styleId) {
        newStyle = styles[i]
        break;
      }
    }
    this.setState({
      currentStyle: newStyle
    })
  }

  render() {
    return(
      <div id='container' data-testid='test_ProductOverview'>
        <ImageGallery currentStyle = {this.state.currentStyle}/>
        <ProductInfo productInfo = {this.state.currentProduct.productInfo} currentStyle = {this.state.currentStyle} avgRating={this.props.avgRating}/>
        <StyleSelector handleStyleChange={this.handleStyleChange} styles = {this.state.currentProduct.productStyles.results} currentStyle = {this.state.currentStyle}/>
        <AddToCart currentStyle = {this.state.currentStyle}/>
        <Slogan productInfo = {this.state.currentProduct.productInfo}/>
      </div>
    )
  }
}

export default ProductOverview;