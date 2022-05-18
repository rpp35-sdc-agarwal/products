import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
<<<<<<< HEAD
import ProductOverview from './productoverview/ProductOverview.jsx';
=======
import productListExample from './examples/productList-example.js';
import Questions from './components/Questions/Questions.jsx';
>>>>>>> cd1d5063d09d88d76288f8f47a1fe7743a34dd38

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD

=======
      // TODO: this is a product id from the example, and it should be changed later
      currentProductId: '5',
      productList: [...productListExample]
>>>>>>> cd1d5063d09d88d76288f8f47a1fe7743a34dd38
    }
  }
  
  handleItemClick(productId) {
    this.setState({
      currentProductId: productId
    }, () => {
      console.log('updated state: ', this.state.currentProductId)
    })
    /* We also need a click handler in the RelatedItems component to pass the the clicked product id to the App component and update id
    something like this:
      handleClick (e) {
        return this.props.handleItemClick(e.target.value);
      }
    */
  }
  render() {
    console.log(this.state.productList);
    return(
      <div data-testid="test_app">
<<<<<<< HEAD
        This is a test message.
        <ProductOverview />
=======
        {/* Make sure to comment out components that are not built yet to avoid errors*/}
        {/* <ProductOverview />
        <ReviewsContainer /> */}
        <Questions currentProductId={this.state.currentProductId} />
        {/* <RelatedItems handleItemClick={this.handleItemClick.bind(this)} /> */}
>>>>>>> cd1d5063d09d88d76288f8f47a1fe7743a34dd38
      </div>
    )
  }
}

const container = document.getElementById('app') || document.createElement('div');
const root = createRoot(container);
root.render(<App />);

export default App;