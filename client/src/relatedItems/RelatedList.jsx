import React from 'react';
import Card from './Card.jsx'
import '../carousel.css'

const RelatedList = ({products, type, isRelated}) => {
  var cards = products.map((product) => {
    return (
      <Card product={product} type={type} isRelated={isRelated}/>
    )

  })
  return (
    <ul className="cardHolder">
      {cards}
    </ul>
  )
}

export default RelatedList;