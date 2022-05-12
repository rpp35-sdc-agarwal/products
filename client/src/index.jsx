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
        <Carousel wrapper={"wrapper1"}/>

        <Carousel wrapper={"wrapper2"}/>
      </>

    )
  }
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);