import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.jsx'
import '../carousel.css';

class Outfits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (

      <div className="parent">
        <div className="child">


        </div>
        {<Carousel show={3} imgs={this.props.imgs}/>}


      </div>
    )
  }
}

export default Outfits;