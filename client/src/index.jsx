import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import Carousel from './relatedItems/Carousel.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <>
        <Carousel show={4}/>
        <Carousel show={3}/>



      </>

    )
  }
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);