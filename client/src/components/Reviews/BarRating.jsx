import React from 'react';
import ReactDOM from 'react-dom';


class BarRating extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  // componentDidMount() {
  //   var rating = Math.round(this.props.rating / this.state.totalStars * 100)
  //   var ratingRounded = `${Math.round(rating / 5) * 5}%`
  //   this.setState({
  //     rating: ratingRounded
  //   })
  // }

  // componentDidUpdate(oldProps) {
  //   if (oldProps.rating !== this.props.rating) {
  //     var rating = Math.round(this.props.rating / this.state.totalStars * 100)
  //     var ratingRounded = `${Math.round(rating / 5) * 5}%`
  //     this.setState({
  //       rating: ratingRounded
  //     })
  //   }
  // }


  render() {
    const widthStyle = {
      width: this.state.rating
    }

    return (
      <div className={this.props.name + " bar-outer"}>
        <div className={this.props.name + " bar-inner"} style={{ width: this.props.rating + '%'}} >
        </div>
      </div>
    )
  }

}



export default BarRating;
