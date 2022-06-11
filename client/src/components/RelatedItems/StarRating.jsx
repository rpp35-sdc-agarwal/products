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

  componentDidUpdate(oldProps) {
    if (oldProps.rating !== this.props.rating) {
      var rating = Math.round(this.props.rating / this.state.totalStars * 100)
      var ratingRounded = `${Math.round(rating / 5) * 5}%`
      this.setState({
        rating: ratingRounded
      })
    }
  }


  render() {

    var widthStyle = {
      width: `${(this.props.rating/5) * 100}%`
    };

    return (
      <div className="star-outer">
        <div className="star-inner" style={widthStyle}>
        </div>
      </div>
    )
  }

}



export default StarRating;
