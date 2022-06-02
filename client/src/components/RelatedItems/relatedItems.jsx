import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.jsx'
import OutfitCarousel from './OutfitCarousel.jsx'



class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {



    }
  }



  render() {
    return (
      <div>
        <h4>RELATED ITEMS</h4>
         <Carousel
         products={this.state.products}

         currentProductId={this.props.currentProductId}/>
        <h4>YOUR OUTFIT</h4>
        <OutfitCarousel
        products={this.state.products}

        currentProductId={this.props.currentProductId}
        />
      </div>
    )
  }
}

export default RelatedItems

