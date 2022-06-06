import React from 'react';

class ExpandedView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: this.props.currentStyle.photos,
      photoIndex: this.props.photoIndex,
      zoom: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.hideLeft = this.hideLeft.bind(this);
    this.hideRight = this.hideRight.bind(this);
    this.handleRLButtonClick = this.handleRLButtonClick.bind(this);
    this.selected = this.selected.bind(this);
    this.handleIconClick = this.handleIconClick.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.hideIcons = this.hideIcons.bind(this);
    this.handleXClick = this. handleXClick.bind(this);
  }

  handleClick(e) {
    e.target.style.transform = ''
    e.target.style.cursor = 'zoom-in'
    this.setState({
      zoom: !this.state.zoom
    })
  }

  hideLeft() {
    if(this.state.photoIndex === 0 || this.state.zoom) {
      return 'hideArrow';
    } else {
      return '';
    }
  }

  hideRight() {
    if(this.state.photos.length-1 === this.state.photoIndex || this.state.zoom) {
      return 'hideArrow';
    } else {
      return '';
    }
  }

  hideIcons() {
    if(this.state.zoom) {
      return 'hideIcons';
    } else {
      return 'iconsDiv';
    }
  }

  handleRLButtonClick(e) {
    this.props.handleRLClick(e);
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      photoIndex: props.photoIndex
    })
  }

  selected(index) {
    if(index === this.state.photoIndex) {
      return 'exSelected';
    } else {
      return '';
    }
  }

  handleIconClick(index) {
    this.props.handleImageChange(index);
  }

  mouseMove(e) {
    if(!this.state.zoom) {
      return;
    }
    let expandedDiv = document.getElementById('expandedDiv');
    let expandedContent = document.getElementById('expandedContent');
    let mWidth = expandedDiv.offsetWidth;
    let mHeight = expandedDiv.offsetHeight;
    let clientX = (e.clientX - expandedDiv.offsetLeft)/mWidth * 100;
    let clientY = (e.clientY - expandedDiv.offsetTop)/mHeight * 100;
    e.target.style.transform = 'translate(-'+clientX+'%, -'+clientY+'%) scale(2.5)';
    e.target.style.cursor = 'zoom-out'
  }

  handleXClick() {
      this.props.togglePop();
  }

  render() {
    return(
      <div id='expandedDiv'>
        <div id={this.hideLeft()}>
          <button className='carousel-button exPrev' value='prev' onClick={this.handleRLButtonClick}>&#8656;</button>
        </div>
        <div id={this.hideRight()}>
          <button className='carousel-button exNext' value='next' onClick={this.handleRLButtonClick}>&#8658;</button>
        </div>
        <img onMouseMove={(e)=>this.mouseMove(e)}
          src={this.state.photos[this.state.photoIndex].url} id='expandedContent' onClick={(e)=>this.handleClick(e)}
        />
        <div id={this.hideIcons()}>
          {this.state.photos.map((photo, index) =>
            <div className='icon' key={index} id={this.selected(index)}>
              <img className='iconFrame' onClick={()=>this.handleIconClick(index)}
                src={photo.thumbnail_url}
              />
            </div>
          )}
        </div>
        <div id='exCloseButton' onClick={this.handleXClick}>
          <button>
            x
          </button>
        </div>
      </div>
    )
  }
}

export default ExpandedView;