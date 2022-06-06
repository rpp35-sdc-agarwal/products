import React from 'react';
import GalleryThumbnails from './GalleryThumbnails.jsx';
import ExpandedView from './ExpandedView.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: this.props.currentStyle,
      currentImageIndex: 0,
      thumbnailFirstIndex: 0,
      thumbnailLastIndex: 5,
      pop: false
    }
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleRLClick = this.handleRLClick.bind(this);
    this.handleDownArrowClick = this.handleDownArrowClick.bind(this);
    this.handleUpArrowClick = this.handleUpArrowClick.bind(this);
    this.renderImageDiv = this.renderImageDiv.bind(this);
    this.togglePop = this.togglePop.bind(this);
  }

  togglePop() {
    this.setState({
      pop: !this.state.pop
    })
  }

  handleDownArrowClick() {
    if (this.state.thumbnailLastIndex === this.state.currentStyle.photos.length) {
      return;
    } else {
      this.setState({
        thumbnailFirstIndex: this.state.thumbnailFirstIndex += 1,
        thumbnailLastIndex: this.state.thumbnailLastIndex += 1
      })
    }
  }

  handleUpArrowClick() {
    if (this.state.thumbnailFirstIndex === 0) {
      return;
    } else {
      this.setState({
        thumbnailFirstIndex: this.state.thumbnailFirstIndex -= 1,
        thumbnailLastIndex: this.state.thumbnailLastIndex -= 1
      })
    }
  }

  handleImageChange(urlIndex) {
    if(this.state.currentImageIndex === urlIndex) {
      return;
    }
    this.setState({
      currentImageIndex: urlIndex
    })
  }

  handleRLClick(e) {
    let currentImageIndex = this.state.currentImageIndex;
    let photosLength = this.state.currentStyle.photos.length;
    if (e.target.value === 'next') {
      if(currentImageIndex === photosLength - 1) {
        return;
      } else {
        currentImageIndex++;
      }
      let lastIndex = this.state.thumbnailLastIndex;
      if(currentImageIndex === lastIndex) {
        this.handleDownArrowClick();
      }
      this.setState({
        currentImageIndex: currentImageIndex
      })
    } else {
      if(currentImageIndex === 0) {
        return;
      } else {
        currentImageIndex--;
      }
      let firstIndex = this.state.thumbnailFirstIndex;
      this.setState({
        currentImageIndex: currentImageIndex
      })
      currentImageIndex++;
      if(currentImageIndex === firstIndex) {
        this.handleUpArrowClick();
      }
    }
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      currentStyle: props.currentStyle,
      currentImageIndex: 0,
      thumbnailFirstIndex: 0,
      thumbnailLastIndex: 5
    })
  }

  renderImageDiv() {
    let index = this.state.currentImageIndex;
    if(index === 0) {
      return(
        <div id = 'imageDiv'>
        <div>
          <button className='carousel-button next' value='next' onClick={this.handleRLClick}>&#8658;</button>
        </div>
        <img id = 'frame'
          src = {this.state.currentStyle.photos[this.state.currentImageIndex].url}
          onClick = {this.togglePop}
        />
        {this.state.pop ? <ExpandedView handleImageChange={this.handleImageChange} handleRLClick={this.handleRLClick}  photoIndex={this.state.currentImageIndex} togglePop={this.togglePop} currentStyle={this.state.currentStyle}/> : null}
      </div>
      )
    } else if (index === this.state.currentStyle.photos.length - 1) {
      return(
        <div id = 'imageDiv'>
        <div>
          <button className='carousel-button prev' value='prev' onClick={this.handleRLClick}>&#8656;</button>
        </div>
        <img id = 'frame'
          src = {this.state.currentStyle.photos[this.state.currentImageIndex].url}
          onClick = {this.togglePop}
        />
        {this.state.pop ? <ExpandedView handleImageChange={this.handleImageChange} handleRLClick={this.handleRLClick}  photoIndex={this.state.currentImageIndex} togglePop={this.togglePop} currentStyle={this.state.currentStyle}/> : null}
      </div>
      )
    } else {
      return(
        <div id = 'imageDiv'>
        <div>
          <button className='carousel-button prev' value='prev' onClick={this.handleRLClick}>&#8656;</button>
        </div>
        <div>
          <button className='carousel-button next' value='next' onClick={this.handleRLClick}>&#8658;</button>
        </div>
        <img id = 'frame'
          src = {this.state.currentStyle.photos[this.state.currentImageIndex].url}
          onClick = {this.togglePop}
        />
        {this.state.pop ? <ExpandedView handleImageChange={this.handleImageChange} handleRLClick={this.handleRLClick}  photoIndex={this.state.currentImageIndex} togglePop={this.togglePop} currentStyle={this.state.currentStyle}/> : null}
      </div>
      )
    }
  }

  render() {
    return(
      <div id = 'galleryDiv' className = 'childDiv'>

        <GalleryThumbnails
          thumbnailFirstIndex={this.state.thumbnailFirstIndex}
          thumbnailLastIndex={this.state.thumbnailLastIndex}
          currentStyle = {this.state.currentStyle}
          currentImageIndex={this.state.currentImageIndex}
          handleDownArrowClick={this.handleDownArrowClick}
          handleUpArrowClick={this.handleUpArrowClick}
          handleImageChange={this.handleImageChange}
        />

        {this.renderImageDiv()}
      </div>
    )
  }
}

export default ImageGallery;