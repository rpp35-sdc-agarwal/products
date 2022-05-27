import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.jsx'


class RelatedList extends React.Component {
  constructor(props) {
    super(props)
  }

  handleShiftLeft() {
    this.props.handleShift()
  }

  handleShiftRight() {

    this.props.handleShiftRight()
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
      {
        this.props.shift > 0 &&
        <button className="shiftButton" onClick={this.handleShiftRight.bind(this)}></button>

      }
      {
        this.props.shift < this.props.products.length - 4 &&
        <button className="shiftButton right-side" onClick={this.handleShiftLeft.bind(this)}></button>
      }


      <ul className={`cardHolder ${this.props.type}`} style={{ transform: `translateX(-${shiftAmt}px)` }}>
        {cards}
      </ul>

    </>
    )

  }
}


export default RelatedList;