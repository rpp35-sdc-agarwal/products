import React from 'react';
import '../carousel.css'
import StarRating from './StarRating.jsx'


const Card = ({product, type, isRelated, rating}) => {
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
      </div>
      <StarRating rating={rating} />

    </div>

  )
}

export default Card;