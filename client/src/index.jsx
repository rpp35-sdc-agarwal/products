import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return(
      <div>
        This is a test message.
      </div>
    )
  }
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);