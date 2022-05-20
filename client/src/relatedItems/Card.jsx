import React from 'react';
import ReactDOM from 'react-dom';
// import '../carousel.css'
import StarRating from './StarRating.jsx'


class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      compare: false
    }
  }

  render() {

    return (
      <div className="card">
        { this.props.isRelated &&

          <div className="modal-card">


          </div>
        }

        <img src="https://via.placeholder.com/150" alt="Avatar" ></img>
        <div className="container">
          <h4><b>{this.props.product.category}</b></h4>
          <p>{this.props.product.name}</p>
        </div>
        <StarRating rating={this.props.rating} />

      </div>

    )
  }
}

export default Card;