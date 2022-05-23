import React from 'react';
import ReactDOM from 'react-dom';
// import '../carousel.css'
import StarRating from './StarRating.jsx'
import CardModal from './CardModal.jsx'


class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      compare: false
    }
    this.compare = this.compare.bind(this);
  }

  compare() {
    this.setState({
      compare: !this.state.compare
    })
  }

  render() {
    var shift = this.props.shift*this.props.width


    return (
      <div className="card" style={{ transform: `translateX(-${shift}px)` }}>
        <button className="tooltip" onClick={this.compare}>
          <span class="tooltiptext">Compare</span>
        </button>


        { this.props.isRelated && this.state.compare &&
          <CardModal toggleModal={this.compare}/>
        }

        <img src="https://via.placeholder.com/150" alt="Avatar" ></img>
        <div className="container">
          <h4><b>{this.props.product.category}</b></h4>
          <p>{this.props.product.name}</p>
          <StarRating rating={this.props.rating} />
        </div>


      </div>

    )
  }
}

export default Card;