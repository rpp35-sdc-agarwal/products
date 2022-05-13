import React from 'react';
import Card from './Card.jsx'
import '../carousel.css'

const RelatedList = ({imgs, type, isRelated}) => {
  var cards = imgs.map((img) => {
    return (
      <Card img={img} type={type} isRelated={isRelated}/>
    )

  })
  return (
    <ul className="cardHolder">
      {cards}
    </ul>
  )
}

export default RelatedList;