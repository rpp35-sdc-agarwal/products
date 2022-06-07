import React from 'react';

const AddOutfit = ({addOutfit, currentProductId}) => {
  return (
    <button className="addOutfit" onClick={()=>addOutfit(currentProductId)}>
        +
      </button>

  )


}

export default AddOutfit;