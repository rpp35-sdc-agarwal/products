import React from 'react';
import Card from './Card.jsx'


const RelatedList = ({products, type, isRelated, ratings, shift, width, handleShift}) => {
  var cards = products.map((product, i) => {
    return (
      <Card product={product}
      type={type}
      isRelated={isRelated}
      rating={ratings[i]}
      />
    )

  })
  var shiftAmt = shift * width
  console.log('what is shiftAmt', shiftAmt)
  return (
    <>
    <button onClick={handleShift}></button>
    <ul className="cardHolder" style={{ transform: `translateX(-${shiftAmt}px)` }}>
      {cards}
    </ul>
    </>
  )
}

export default RelatedList;