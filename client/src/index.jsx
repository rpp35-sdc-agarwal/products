import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import axios from 'axios';
import productListExample from './examples/productList-example.js';
import Questions from './components/Questions/Questions.jsx';
import ReviewsContainer from './components/Reviews/ReviewsContainer.jsx';
import ProductOverview from './components/ProductOverview/ProductOverview.jsx';
import Carousel from './components/RelatedItems/Carousel.jsx';
import RelatedItems from './components/RelatedItems/RelatedItems.jsx';
import listProducts from '../data/listProducts.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: [1, 2, 3, 4, 4.2, 5, 2.7, 4, 3, 2, 1.1],

      // TODO: this is a product id from the example, and it should be changed later
      // currentProductId: '5',
      // productList: [...productListExample]
      currentProductId: '',
      productList: []
    }
  }

  // Retrive products from the backend and update the productList and currentProductId
  retrieveProducts () {
    axios.get('/products')
      .then((res) => {
        this.setState({
          productList: [...res.data]
        }, () => {
          console.log('products: ', this.state.productList);
          this.setState({
            currentProductId: JSON.stringify(this.state.productList[0].id)
          }, () => {
            console.log('current product id: ', this.state.currentProductId)
          })
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidMount () {
    // console.log('in App componentDidMount');
    this.retrieveProducts();
  }

  handleItemClick(productId) {
    this.setState({
      currentProductId: JSON.stringify(productId)
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
    return(
      <div data-testid="test_app">
        {/* Make sure to comment out components that are not built yet to avoid errors*/}
        <ProductOverview />
        <RelatedItems handleItemClick={this.handleItemClick.bind(this)} products={this.props.products} ratings={this.state.ratings}/>
        <Questions currentProductId={this.state.currentProductId} />
        <ReviewsContainer />
      </div>
    )
  }
}


const container = document.getElementById('app') || document.createElement('div');
const root = createRoot(container);
root.render(<App products={listProducts}/>);

export default App;
