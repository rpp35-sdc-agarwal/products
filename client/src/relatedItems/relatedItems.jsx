import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.jsx'

class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgs: ["https://via.placeholder.com/1600x300","https://via.placeholder.com/1600x300","https://via.placeholder.com/1600x300"]

    }
  }

  render() {
    return (
    <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
      {<Carousel imgs={this.state.imgs}/>}

    </div>
    )
  }
}

export default RelatedItems

