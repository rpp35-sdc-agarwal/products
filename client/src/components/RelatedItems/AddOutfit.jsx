import React from 'react';

const AddOutfit = ({addOutfit, currentProductId}) => {
  return (
    <div className={`card `} onClick={()=>addOutfit(currentProductId)}>

      <img src="https://via.placeholder.com/150x200" alt="Avatar" ></img>

    </div>
  )


}

export default AddOutfit;