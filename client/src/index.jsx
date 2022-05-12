import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import Questions from './components/Questions/Questions.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return(
      <div data-testid="test_app">
        <Questions />
      </div>
    )
  }
}

const container = document.getElementById('app') || document.createElement('div');
const root = createRoot(container);
root.render(<App />);

export default App;