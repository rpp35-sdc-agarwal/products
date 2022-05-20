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

    return (
      <div className="card">
        <button className="card-modal-toggle" onClick={this.compare}>COMPARE</button>
        { this.props.isRelated && this.state.compare &&
          <CardModal toggleModal={this.compare}/>
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