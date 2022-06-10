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
      currentProductName: '',
      productList: []
    }
    this.setAvg = this.setAvg.bind(this);
  }

  setAvg(avgRating, totalRevs) {
    this.setState({
      avgRating: avgRating,
      totalRevs: totalRevs
    });
  }
  // Retrive products from the backend and update the productList and currentProductId
  retrieveProducts () {
    axios.get('/products')

      .then((res) => {
        // product list
        // get id of first product
        // push state?
        var data = res.data;
        var id = data[0].id;
        var state = history.state;
        var url = ''
        if (!state) {
          url = `ip/${id}`;
        } else {
          url = `${id}`
        }

        var state = {
          id: id
        }
        history.pushState(state, '', url)
        this.setState({
          productList: [...res.data]

        }, () => {
          // push state?
          console.log('products: ', this.state.productList);
          this.setState({
            currentProductId: JSON.stringify(this.state.productList[0].id),
            currentProductName: this.state.productList[0].name,
            currentProductId: JSON.stringify(this.state.productList[0].id)
          }, () => {
            console.log('current product id: ', this.state.currentProductId)
            console.log('current product name: ', this.state.currentProductName)
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
    // get id of first product in list

    /// url = "product id"
    // history.pushstate(.., url)
  }

  handleItemClick(productId, productName) {
    this.setState({
      currentProductId: JSON.stringify(productId),
      currentProductName: productName
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
    console.log('currentProductName: ', this.state.currentProductName)
    return(
      <div data-testid="test_app">
        {/* Make sure to comment out components that are not built yet to avoid errors*/}
        <ProductOverview totalRevs={this.state.totalRevs} avgRating={this.state.avgRating} currentProductId={this.state.currentProductId}/>
        <RelatedItems handleItemClick={this.handleItemClick.bind(this)}
        products={this.props.products}
        ratings={this.state.ratings}
        currentProductId={this.state.currentProductId}/>
        <Questions currentProductId={this.state.currentProductId} currentProductName={this.state.currentProductName} />
        <ReviewsContainer product_name={this.state.currentProductName} setAvg={this.setAvg} product_id={this.state.currentProductId}/>
      </div>
    )
  }
}


const container = document.getElementById('app') || document.createElement('div');
const root = createRoot(container);
root.render(<App />);

export default App;
