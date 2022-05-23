import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.jsx'
import OutfitCarousel from './OutfitCarousel.jsx'



class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      products: this.props.products,

    }
  }

  componentDidMount() {
    fetch('/products')
    .then(res => res.json())
    .then(data => console.log(data))
  }



  render() {
    return (
      <>
         <Carousel products={this.state.products}
         ratings={this.props.ratings}
         handleShift={this.props.handleShift}
         type={'related'}

         shift={this.props.shift}
         handleShiftRight={this.props.handleShiftRight}/>
        <OutfitCarousel
         products={this.state.products}
         ratings={this.props.ratings}
         handleShiftLeft={this.props.handleOutfitLeft}
         type={'outfit'}
         shift={this.props.outfitShift}
         handleShiftRight={this.props.handleOutfitRight}/>
      </>
    )
  }
}

export default RelatedItems

