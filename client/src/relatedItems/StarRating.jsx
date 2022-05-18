import React from 'react';
import ReactDOM from 'react-dom';

class StarRating extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: this.props.rating,
      totalStars: 5
    }
  }

  componentDidMount() {
    var rating = Math.round(this.props.rating / this.state.totalStars * 100)
    this.setState({
      rating: rating
    })
  }



  render() {
    return (
      <h4>{this.state.rating}</h4>
    )
  }

}



export default StarRating;
