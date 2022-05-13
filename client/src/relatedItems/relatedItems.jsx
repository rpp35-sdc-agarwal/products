import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.jsx'
import OutfitCarousel from './OutfitCarousel.jsx'


class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgs: ["https://via.placeholder.com/150", "https://via.placeholder.com/150","https://via.placeholder.com/150","https://via.placeholder.com/150"]

    }
  }

  render() {
    return (
      <>
        <Carousel imgs={this.state.imgs}/>
        <OutfitCarousel imgs={this.state.imgs}/>
      </>


    )
  }
}

export default RelatedItems

