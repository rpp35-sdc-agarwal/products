import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.jsx'
import OutfitCarousel from './OutfitCarousel.jsx'
import axios from 'axios';


class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: this.props.products


    }
  }

  componentDidMount() {
    //var id = Number(this.state.currentProductId)
    axios.get(`/products/71699/related`)
    .then(res => {
      this.setState({
       products: [...res.data]
      })
    })

  }

  render() {
    return (
      <>
         <Carousel products={this.state.products}
         ratings={this.props.ratings}
         currentProductId={this.props.currentProductId}/>
        {/* <OutfitCarousel products={this.state.products}/> */}
      </>
    )
  }
}

export default RelatedItems

