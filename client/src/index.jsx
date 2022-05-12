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
        <Carousel slider={"slider1"}/>
        <div className="add">
          <img src="https://via.placeholder.com/300"></img>
          <Carousel slider={"slider2"}/>
        </div>


      </>

    )
  }
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);