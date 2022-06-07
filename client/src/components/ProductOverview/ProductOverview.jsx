import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import sampleData from '../../../../sampleData.js';
import Slogan from './Slogan.jsx';
import API from '../../../../config.js';
import axios from 'axios';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: sampleData,
      currentStyle: sampleData.productStyles.results[0]
    };
    this.handleStyleChange = this.handleStyleChange.bind(this);
    this.retrieveProductInfo = this.retrieveProductInfo.bind(this);
    this.retrieveProductStyles = this.retrieveProductStyles.bind(this);
  }

  async retrieveProductInfo (productId) {
    let options = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}`,
      headers: {
        'Authorization': API
      }
    }

    let res = await axios(options);
    return res.data
  }

  async retrieveProductStyles (productId) {
    let options = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/styles`,
      headers: {
        'Authorization': API
      }
    }

    let res = await axios(options);
    return res.data
  }

  componentDidUpdate (prevProps) {
    if(prevProps.currentProductId !== this.props.currentProductId) {
      let data = {};
      this.setState({
        currentProductId: this.props.currentProductId
      }, ()=>{
        this.retrieveProductInfo(Number(this.state.currentProductId))
          .then((results) => {
            data.productInfo = results;
            this.retrieveProductStyles(Number(this.state.currentProductId))
            .then((results) => {
              data.productStyles = results;
              this.setState({
                currentProduct: data,
                currentStyle: data.productStyles.results[0]
              })
            })
            .catch((err) => {
              console.log(err);
            })
          })
          .catch((err) => {
            console.log(err);
          })
      })
    }
  }

  // UNSAFE_componentWillReceiveProps(props) {
  //   let data = {};
  //   this.setState({
  //     currentProductId: props.currentProductId
  //   }, ()=>{
  //     this.retrieveProductInfo(Number(props.currentProductId))
  //       .then((results) => {
  //         data.productInfo = results;
  //         this.retrieveProductStyles(Number(props.currentProductId))
  //         .then((results) => {
  //           data.productStyles = results;
  //           this.setState({
  //             currentProduct: data,
  //             currentStyle: data.productStyles.results[0]
  //           })
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         })
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //   })
  // }

  // componentDidMount (props) {
  //   let data = {};
  //   this.setState({
  //     currentProductId: props.currentProductId
  //   }, ()=>{
  //     this.retrieveProductInfo(Number(props.currentProductId))
  //       .then((results) => {
  //         data.productInfo = results;
  //         this.retrieveProductStyles(Number(props.currentProductId))
  //         .then((results) => {
  //           data.productStyles = results;
  //           this.setState({
  //             currentProduct: data,
  //             currentStyle: data.productStyles.results[0]
  //           })
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         })
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //   })
  // }

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
      <div id='OverviewContainer' data-testid='test_ProductOverview'>
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