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
    var ratingRounded = `${Math.round(rating / 5) * 5}%`
    this.setState({
      rating: ratingRounded
    })
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      rating: props.rating
    })
  }

  render() {
    const widthStyle = {
      width: this.state.rating
    }

    return (
      <div className="star-outer">
        <div className="star-inner" style={widthStyle} >


        </div>

      </div>

    )
  }

}



export default StarRating;
