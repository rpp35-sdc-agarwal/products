import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

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



  render() {
    const widthStyle = {
      width: this.state.rating
    }
    const element = <FontAwesomeIcon icon={faCoffee} />
    return (
      <div className="star-outer">
        <div className="star-inner" style={widthStyle} >
          <h4>{this.state.rating}</h4>
          {element}
        </div>

      </div>

    )
  }

}



export default StarRating;
