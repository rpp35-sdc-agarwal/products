import React from 'react';
import Card from './Card.jsx'


const RelatedList = ({products, type, isRelated, ratings, shift, width, next}) => {
  var cards = products.map((product, i) => {
    return (
      <Card product={product}
      type={type}
      isRelated={isRelated}
      rating={ratings[i]}
      next={next}/>
    )

  })
  var shiftAmt = shift * width
  return (
    <ul className="cardHolder" style={{ transform: `translateX(-${shiftAmt}px)` }}>
      {cards}
    </ul>
  )
}

export default RelatedList;