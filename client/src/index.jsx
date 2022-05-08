import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import RelatedItems from './relatedItems/relatedItems.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <RelatedItems />
    )
  }
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);