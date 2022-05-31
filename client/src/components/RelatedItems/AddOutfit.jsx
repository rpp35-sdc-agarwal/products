import React from 'react';

const AddOutfit = ({addOutfit}) => {
  return (
    <div className={`card `} onClick={()=>addOutfit(this.props.product.id)}>

      <img src="https://via.placeholder.com/150x200" alt="Avatar" ></img>

    </div>
  )


}

export default AddOutfit;