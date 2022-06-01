import React from 'react';
import Card from './Card.jsx'

const RelatedList = ({products, type, isRelated, deleteOutfit, shift}) => {
  var cards = products.map((product, i) => {
    return (
      <Card product={product}
      type={type}
      isRelated={isRelated}
      deleteOutfit={deleteOutfit}
      shift={shift}

       key={i}/>
    )

  })
  return (
    <ul className="cardHolder">
      {cards}
    </ul>
  )
}

export default RelatedList;