import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.jsx'

class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
    <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
      {<Carousel >
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
      </Carousel>}

    </div>
    )
  }
}

export default RelatedItems

