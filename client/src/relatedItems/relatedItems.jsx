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

