import React from 'react';
import ReactDOM from 'react-dom';
// import '../carousel.css'
import StarRating from './StarRating.jsx'
import CardModal from './CardModal.jsx'
import SalePrice from './SalePrice.jsx'
import DefaultPrice from './DefaultPrice.jsx'


class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      compare: false
    }
    this.compare = this.compare.bind(this);
  }

  compare() {
    this.setState({
      compare: !this.state.compare
    })
  }

  render() {
    var price = null;
    if (this.props.product.sale_price) {
      price = <SalePrice price={this.props.product.default_price}
              salePrice={this.props.product.sale_price} />
    } else {
      price = <DefaultPrice price={this.props.product.default_price} />
    }



    return (
      <div className="card" >
        <button className="tooltip" onClick={this.compare}>
          <span className="tooltiptext">Compare</span>
        </button>


        { this.props.isRelated && this.state.compare &&
          <CardModal toggleModal={this.compare}/>
        }

        <img src="https://via.placeholder.com/150" alt="Avatar" ></img>
        <div className="container">
          <h4><b>{this.props.product.category}</b></h4>
          <p>{this.props.product.name}</p>
          {price}
          <StarRating rating={this.props.rating} />
        </div>


      </div>

    )
  }
}

export default Card;