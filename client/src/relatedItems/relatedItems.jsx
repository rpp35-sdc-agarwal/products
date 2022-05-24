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
         type={'related'}
         />
        <OutfitCarousel
         products={this.state.products}
         ratings={this.props.ratings}

         type={'outfit'}
         />
      </>
    )
  }
}

export default RelatedItems

