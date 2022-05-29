import React from 'react';

class GalleryThumbnails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: this.props.currentStyle,
      currentImageIndex: this.props.currentImageIndex
    }
    this.handleImageClick = this.handleImageClick.bind(this);
    this.getClassName = this.getClassName.bind(this);
  }

  handleImageClick(e) {
    this.props.handleImageChange(e.target[Object.keys(e.target)[1]].value)
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      currentStyle: props.currentStyle,
      currentImageIndex: props.currentImageIndex
    })
  }

  getClassName(index) {
    if (index === this.state.currentImageIndex) {
      return 'seletedCarouselFrame';
    } else {
      return 'galleryCarouselFrame';
    }
  }

  render() {
    return(
      <div id = 'galleryCarouselDiv'>
        <div className='arrowDiv'>
          <i className="arrow up"></i>
        </div>
        {this.state.currentStyle.photos.map((photo, index) =>
          <div className='galleryCarouselImageFrame' key={index} onClick={this.handleImageClick}>
            <img className={this.getClassName(index)}
              src = {photo.thumbnail_url} value = {index}
            />
          </div>
        )}
        <div className='arrowDiv'>
          <i className="arrow down"></i>
        </div>
      </div>
    )
  }
}

export default GalleryThumbnails;