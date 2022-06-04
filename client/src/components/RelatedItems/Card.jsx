import React from 'react';
import ReactDOM from 'react-dom';
// import '../carousel.css'
import StarRating from './StarRating.jsx'
import CardModal from './CardModal.jsx'
import SalePrice from './SalePrice.jsx'
import DefaultPrice from './DefaultPrice.jsx'
import axios from 'axios';
import relatedProducts from '../../../data/relatedProducts.js'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      overviewProduct: relatedProducts[0],
      // modalProduct: null,
    }

    this.handleModalClick = this.handleModalClick.bind(this)
  }



  // handleGetCard() {

  //   console.log(this.props.product, 'what is product at card')
  //   this.setState({
  //     modalProduct: this.props.product
  //   }, () => console.log('what is state', this.state.modalProduct))


  // }

  handleModalClick() {
    this.props.handleModalClick(this.props.product)
  }


  render() {
    var price = null;
    if (this.props.product.sale_price) {
      price = <SalePrice price={this.props.product.default_price}
              salePrice={this.props.product.sale_price} />
    } else {
      price = <DefaultPrice price={this.props.product.default_price} />
    }

    var photo = '';
    if (this.props.product.photo) {
      photo = this.props.product.photo;
    } else {
      photo = "https://via.placeholder.com/150"
    }

    var width = 260;
    var shift = width * this.props.shift;

    return (
      <div className={`card ${this.props.type}`}
      style={{ transform: `translateX(-${shift}px)` }}
      >

       {this.props.type === 'related' &&

        <button className="tooltip" onClick={this.handleModalClick}>
          <span className="tooltiptext">Compare</span>
        </button>
       }

        {this.props.type === 'outfit' &&

        <button className="deleteOutfit" onClick={() => this.props.deleteOutfit(this.props.product.id)}>
          x
        </button>
        }





        <div className="container">
          <img class="img-resize" src={photo} alt="Avatar" ></img>
          <h4><b>{this.props.product.category}</b></h4>
          <p>{this.props.product.name}</p>
          {price}
          {this.props.product.ratings &&

            <StarRating rating={this.props.product.ratings} />
          }
        </div>


      </div>

    )
  }
}

export default Card;