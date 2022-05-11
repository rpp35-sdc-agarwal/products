import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.jsx'
import Outfits from './Outfits.jsx'

class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgs: ["https://via.placeholder.com/300x300", "https://via.placeholder.com/300x300","https://via.placeholder.com/300x300","https://via.placeholder.com/300x300", ]

    }
  }

  render() {
    return (
    <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
      {<Carousel show={4} imgs={this.state.imgs}/>}
      {<Outfits imgs={this.state.imgs}/>}






    </div>
    )
  }
}

export default RelatedItems

