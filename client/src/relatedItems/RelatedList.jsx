import React from 'react';
import Card from './Card.jsx'


const RelatedList = ({products, type, isRelated, ratings}) => {
  var cards = products.map((product, i) => {
    return (
      <Card product={product}
      type={type}
      isRelated={isRelated}
      rating={ratings[i]}/>
    )

  })
  return (
    <ul className="cardHolder">
      {cards}
    </ul>
  )
}

export default RelatedList;