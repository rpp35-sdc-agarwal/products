import React from 'react';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: this.props.currentStyle,
      currentSku: ''
    }
    this.renderQuantity = this.renderQuantity.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  renderQuantity() {
    if (this.state.currentSku === '') {
      return (<option value = ''>-</option>)
    } else {
      let result = [];
      let quantity = this.state.currentStyle.skus[this.state.currentSku].quantity;
      if (quantity > 15) {
        quantity = 15;
      }
      let count = 1;
      while (count <= quantity) {
        result.push(<option value={count} key={count}>{count}</option>);
        count++;
      }
      return result;
    }
  }

  handleChange(e) {
    this.setState({
      currentSku: e.target.value
    });
  }

  render() {
    const skus = Object.keys(this.state.currentStyle.skus);
    const skusObject = this.state.currentStyle.skus

    return(
      <div className='childDiv'>
        <select onChange={this.handleChange}>
          <option value = ''>SELECT SIZE</option>
          {skus.map(sku =>
          <option value={sku} key={sku}>{skusObject[sku].size}</option>
          )}
        </select>
        <select>
          {this.renderQuantity()}
        </select>
        <button>Add To Cart</button>
      </div>
    )
  }
}

export default AddToCart;