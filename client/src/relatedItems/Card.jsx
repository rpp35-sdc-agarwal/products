import React from 'react';
import '../carousel.css'

const Card = ({img}) => {
  return (
    <div className="card related">
      <div className="modal">

      </div>
      <img src="https://via.placeholder.com/150" alt="Avatar" ></img>
      <div className="container">
        <h4><b>John Doe</b></h4>
        <p>Architect and engineer</p>
      </div>
    </div>

  )
}

export default Card;