import React from 'react';
// import '../carousel.css'
import StarRating from './StarRating.jsx'
import DefaultPrice from './DefaultPrice.jsx'
import SalePrice from './SalePrice.jsx'


const Card = ({product, type, isRelated, rating}) => {
  var price = null;
  var salePrice = product.sale_price
  if (salePrice) {
    price = <SalePrice salePrice={salePrice}
            price={product.default_price} />
  } else {
    price = <DefaultPrice price={product.default_price} />
  }
  return (
    <div className={`card ${type}`}>
      { isRelated &&

        <div className="modal">

        </div>
      }

      <img src="https://via.placeholder.com/150" alt="Avatar" ></img>
      <div className="container">
        <h4><b>{product.category}</b></h4>
        <p>{product.name}</p>
        {price}

      </div>
      <StarRating rating={rating} />

    </div>

  )
}

export default Card;