import React from 'react';
import '../carousel.css'

const Card = ({product, type, isRelated}) => {
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
    </div>

  )
}

export default Card;