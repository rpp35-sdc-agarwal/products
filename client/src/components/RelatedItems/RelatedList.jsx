import React from 'react';
import Card from './Card.jsx'

const RelatedList = ({products, type, deleteOutfit, shift, handleModalClick}) => {
  var cards = products.map((product, i) => {
    return (
      <Card product={product}
      type={type}

      deleteOutfit={deleteOutfit}
      shift={shift}
      handleModalClick={handleModalClick}

       key={i}/>
    )

  })
  return (
    <ul className={`cardHolder ${type}`}>
      {cards}
    </ul>
  )
}

export default RelatedList;