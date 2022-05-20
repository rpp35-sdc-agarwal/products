import React from 'react';

class AnswerPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }
  render () {
    return (
      <img src={photo.url}/>
    )
  }
}

export default AnswerPhoto;