import React from 'react';

class AnswerPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      id: this.props.id
    }
  }
  
  handlePhotoClick () {
    this.setState({
      clicked: true
    }, ()=>{
      let element = document.getElementById(`QA-photo-${this.state.id}`);
      element.classList.add('photo-full-screen');
    })
  }
  
  exitFullScreen () {
    this.setState({
      clicked: false
    }, ()=>{
      let element = document.getElementById(`QA-photo-${this.state.id}`);
      element.classList.remove('photo-full-screen');
    })
  }
  
  render () {
    return (
      <div className="QA-photo-container">
        {this.state.clicked ? <div className="close" onClick={this.exitFullScreen.bind(this)} >&times;</div> : null}
        <img id={`QA-photo-${this.state.id}`} className="QA-photo" src={this.props.photo.url} onClick={this.handlePhotoClick.bind(this)} />
      </div>
        
    )
  }
}

export default AnswerPhoto;