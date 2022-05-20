import React from 'react';

const SalePrice = ({salePrice, price}) => {
  return (
    <>
    <span className="salePrice">{salePrice} </span>
    <span className="defaultPrice">{price}</span>
    </>
  )
}

export default SalePrice;