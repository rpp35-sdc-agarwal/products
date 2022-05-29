import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.jsx'
import OutfitCarousel from './OutfitCarousel.jsx'



class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      products: this.props.products
    }
  }

  componentDidMount() {
    fetch('/products')
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div>
         <Carousel
         products={this.state.products}
         ratings={this.props.ratings}
         currentProductId={this.props.currentProductId}/>
        {/* <OutfitCarousel products={this.state.products}/> */}
      </div>
    )
  }
}

export default RelatedItems

