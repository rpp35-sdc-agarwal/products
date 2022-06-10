import React from 'react';
import ReactDOM from 'react-dom';


class CharacterRating extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const widthStyle = {
      width: this.state.rating
    }

    return (
      <div className="character-outer">
        <div className="character-inner" style={{ left: this.props.rating + '%'}} >
        </div>
      </div>
    )
  }

}



export default CharacterRating;
