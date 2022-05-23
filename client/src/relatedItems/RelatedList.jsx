import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.jsx'


class RelatedList extends React.Component {
  constructor(props) {
    super(props)
  }

  handleShift() {
    this.props.handleShift()
  }

  render() {
    var width = 210;
    var cards = this.props.products.map((product, i) => {
      return (
        <Card product={product}
        isRelated={this.props.isRelated}
        rating={this.props.ratings[i]}
        />
      )
    })
    var shiftAmt = this.props.shift * width
    console.log('what is shiftAmt', shiftAmt)
    return (
    <>
      <button className="shiftButton" onClick={this.handleShift.bind(this)}></button>
      <ul className="cardHolder" style={{ transform: `translateX(-${shiftAmt}px)` }}>
        {cards}
      </ul>
    </>
    )

  }
}


export default RelatedList;