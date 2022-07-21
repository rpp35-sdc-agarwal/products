import React from 'react';

class GalleryThumbnails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: this.props.currentStyle,
      currentImageIndex: this.props.currentImageIndex,
      thumbnailFirstIndex: this.props.thumbnailFirstIndex,
      thumbnailLastIndex: this.props.thumbnailLastIndex,
    }
    this.handleImageClick = this.handleImageClick.bind(this);
    this.getClassName = this.getClassName.bind(this);
    this.getUpArrowClassName = this.getUpArrowClassName.bind(this);
    this.getDownArrowClassName = this.getDownArrowClassName.bind(this);
  }

  handleImageClick(e) {
    let url = e.target[Object.keys(e.target)[1]].value;
    let thumbnails = this.state.currentStyle.photos;
    for(let i = 0; i < thumbnails.length; i++) {
      if (thumbnails[i].thumbnail_url === url) {
        this.props.handleImageChange(i);
      }
    }
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      currentStyle: props.currentStyle,
      currentImageIndex: props.currentImageIndex,
      thumbnailFirstIndex: props.thumbnailFirstIndex,
      thumbnailLastIndex: props.thumbnailLastIndex
    })
  }

  getClassName(url) {
    if (url === this.state.currentStyle.photos[this.state.currentImageIndex].thumbnail_url) {
      return 'seletedCarouselFrame';
    } else {
      return 'galleryCarouselFrame';
    }
  }

  getUpArrowClassName() {
    if (this.state.thumbnailFirstIndex === 0) {
      return 'hide';
    } else {
      return '';
    }
  }

  getDownArrowClassName() {
    let lastIndex = this.state.currentStyle.photos.length;
    if (this.state.thumbnailLastIndex === lastIndex) {
      return 'hide';
    } else {
      return '';
    }
  }

  render() {
    return(
      <div id = 'galleryCarouselDiv'>
        <div className='o-arrowDiv'>
          <i className="o-arrow up" id={this.getUpArrowClassName()} onClick={this.props.handleUpArrowClick}></i>
        </div>
        {this.state.currentStyle.photos.slice(this.state.thumbnailFirstIndex, this.state.thumbnailLastIndex).map((photo, index) =>
          <div className='galleryCarouselImageFrame' key={index} onClick={this.handleImageClick}>
            <img className={this.getClassName(photo.thumbnail_url)}
              src = {photo.thumbnail_url} value = {photo.thumbnail_url}
            />
          </div>
        )}
        <div className='o-arrowDiv'>
          <i className="o-arrow down" id={this.getDownArrowClassName()} onClick={this.props.handleDownArrowClick}></i>
        </div>
      </div>
    )
  }
}

export default GalleryThumbnails;