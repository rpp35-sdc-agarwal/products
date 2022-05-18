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

    }
  }
  render() {
    return(
      <RelatedItems products={this.props.products}/>


    )
  }
}

const root = createRoot(document.getElementById('app'));
root.render(<App products={listProducts}/>);