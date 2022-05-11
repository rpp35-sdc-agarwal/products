import React from 'react';

const Card = ({img}) => {
  return (
    <div>
      <div style={{padding: 5}}>

        <img src={img} style={{width: '100%'}}></img>
      </div>
    </div>

  )
}

export default Card;