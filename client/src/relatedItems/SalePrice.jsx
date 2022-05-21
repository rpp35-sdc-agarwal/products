import React from 'react';

const SalePrice = ({salePrice, price}) => {
  return (
    <div data-testid="test-modal-sale">
    <span  className="salePrice">{salePrice} </span>
    <span className="defaultPrice">{price}</span>
    </div>
  )
}

export default SalePrice;