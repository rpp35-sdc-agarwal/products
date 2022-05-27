import React from 'react';
import Card from './Card.jsx'

const RelatedList = ({products, type, isRelated, ratings, handleItemClick}) => {
  var cards = products.map((product, i) => {
    return (
      <Card product={product}
      type={type}
      isRelated={isRelated}
      rating={ratings[i]}
      key={i}
      handleItemClick={handleItemClick}/>
    )

  })
  return (
    <ul className="cardHolder">
      {cards}
    </ul>
  )
}

export default RelatedList;