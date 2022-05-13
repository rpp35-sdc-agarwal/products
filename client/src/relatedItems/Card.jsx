import React from 'react';
import '../carousel.css'

const Card = ({img, type, isRelated}) => {
  return (
    <div className={`card ${type}`}>
      { isRelated &&

        <div className="modal">

        </div>
      }

      <img src="https://via.placeholder.com/150" alt="Avatar" ></img>
      <div className="container">
        <h4><b>John Doe</b></h4>
        <p>Architect and engineer</p>
      </div>
    </div>

  )
}

export default Card;