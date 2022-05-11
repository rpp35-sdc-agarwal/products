import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.jsx'
import '../carousel.css';
import Card from './Card.jsx'

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
            <Card img={"https://via.placeholder.com/300x300", "https://via.placeholder.com/300x300","https://via.placeholder.com/300x300","https://via.placeholder.com/300x300"}/>
            <p>this is some text</p>

        </div>

        {<Carousel show={3} imgs={this.props.imgs}/>}


      </div>
    )
  }
}

export default Outfits;