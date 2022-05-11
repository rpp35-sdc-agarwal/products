import React from 'react';
import Card from './Card.jsx'

const RelatedList = ({imgs}) => {
  var imgs = imgs.map((img) => {
    return (
      <Card img={img} />
    )

  })
  return (
    <>
      {imgs}
    </>
  )
}

export default RelatedList;