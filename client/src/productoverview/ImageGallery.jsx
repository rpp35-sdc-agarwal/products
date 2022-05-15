import React from 'react';
import GalleryThumbnails from './GalleryThumbnails.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: this.props.styles,
      currentStyle: this.props.styles[0],
      currentImage: this.props.styles[0].photos[0].url
    }
    this.handleImageChange = this.handleImageChange.bind(this);
  }


  handleImageChange(urlIndex) {
    console.log(urlIndex)
    if(this.state.currentImage === this.state.currentStyle.photos[urlIndex].url) {
      return;
    }
    this.setState({
      currentImage: this.state.currentStyle.photos[urlIndex].url
    })
  }

  render() {
    return(
      <div id = 'galleryDiv'>

        <GalleryThumbnails currentStyle = {this.state.currentStyle} handleImageChange={this.handleImageChange}/>

        <div id = 'imageDiv'>
          <img id = 'frame'
            src = {this.state.currentImage}
          />
        </div>
      </div>
    )
  }
}

export default ImageGallery;