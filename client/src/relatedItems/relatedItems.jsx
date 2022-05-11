import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.jsx'

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
      {<Carousel show={3} imgs={this.state.imgs}>

        {/* <div>
          <div style={{padding: 8}}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
           </div>
        </div>

        <div>
          <div style={{padding: 8}}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
           </div>
        </div>
        <div>
          <div style={{padding: 8}}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
           </div>
        </div> */}


      </Carousel>}

    </div>
    )
  }
}

export default RelatedItems

