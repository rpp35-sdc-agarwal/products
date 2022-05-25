import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.jsx'
import OutfitCarousel from './OutfitCarousel.jsx'
import axios from 'axios';


class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {


    }
  }

  componentDidMount() {
    //var id = Number(this.state.currentProductId)
    axios.get(`/products/71699/related`)
    .then(res => console.log('did i get data', res.data))

  }

  render() {
    return (
      <>
         <Carousel products={this.props.products}
         ratings={this.props.ratings}
         currentProductId={this.props.currentProductId}/>
        {/* <OutfitCarousel products={this.state.products}/> */}
      </>
    )
  }
}

export default RelatedItems

