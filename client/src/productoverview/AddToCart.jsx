import React from 'react';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div className='childDiv'>
        <select>
          <option value = ''>SELECT SIZE</option>
        </select>
        <select>
          <option value = ''>-</option>
        </select>
        <button>Add To Cart</button>
      </div>
    )
  }
}

export default AddToCart;