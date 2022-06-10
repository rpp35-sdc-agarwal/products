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
      <div id="related-items">
        <h2 className="realted-items-title">Customers Also Viewed</h2>
         <Carousel
         currentProductId={this.props.currentProductId}
         handleItemClick={this.props.handleItemClick}/>
        <h2 className="your-outfit">Your Outfit</h2>
        <OutfitCarousel
        currentProductId={this.props.currentProductId}
        />
      </div>
    )
  }
}

export default RelatedItems

