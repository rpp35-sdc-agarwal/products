import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import Carousel from './relatedItems/Carousel.jsx';
import RelatedItems from './relatedItems/RelatedItems.jsx';
import listProducts from '../data/listProducts.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: [1, 2, 3, 4, 4.2, 5, 2.7, 4, 3, 2, 1.1]

    }
  }
  render() {
    return(
      <RelatedItems products={this.props.products} ratings={this.state.ratings}/>


    )
  }
}

const root = createRoot(document.getElementById('app'));
root.render(<App products={listProducts}/>);