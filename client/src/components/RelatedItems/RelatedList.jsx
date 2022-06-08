import React from 'react';
import Card from './Card.jsx'

const RelatedList = ({products, type, deleteOutfit, shift, handleModalClick, handleItemClick}) => {
  var cards = products.map((product, i) => {
    return (
      <Card product={product}
      type={type}

      deleteOutfit={type === 'outfit' ? deleteOutfit : undefined}
      shift={shift}
      handleModalClick={type === 'related'? handleModalClick : undefined}
      handleItemClick={type === 'related' ? handleItemClick : ()=>{}}

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