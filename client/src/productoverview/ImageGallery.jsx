import React from 'react';
import GalleryThumbnails from './GalleryThumbnails.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: this.props.styles,
      currentStyle: this.props.styles[0],
      currentImageIndex: 0
    }
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleRLClick = this.handleRLClick.bind(this);
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
        currentImageIndex = 0;
      } else {
        currentImageIndex++;
      }
      this.setState({
        currentImageIndex: currentImageIndex
      })
    } else {
      if(currentImageIndex === 0) {
        currentImageIndex = photosLength - 1;
      } else {
        currentImageIndex--;
      }
      this.setState({
        currentImageIndex: currentImageIndex
      })
    }
  }

  render() {
    return(
      <div id = 'galleryDiv' className = 'childDiv'>

        <GalleryThumbnails currentStyle = {this.state.currentStyle} handleImageChange={this.handleImageChange}/>

        <div id = 'imageDiv'>
          <div>
            <button className='carousel-button prev' value='prev' onClick={this.handleRLClick}>&#8656;</button>
          </div>
          <div>
            <button className='carousel-button next' value='next' onClick={this.handleRLClick}>&#8658;</button>
          </div>
          <img id = 'frame'
            src = {this.state.currentStyle.photos[this.state.currentImageIndex].url}
          />
        </div>
      </div>
    )
  }
}

export default ImageGallery;