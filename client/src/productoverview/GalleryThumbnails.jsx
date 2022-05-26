import React from 'react';

class GalleryThumbnails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: this.props.currentStyle,
    }
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleImageClick(e) {
    this.props.handleImageChange(e.target[Object.keys(e.target)[1]].value)
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      currentStyle: props.currentStyle
    })
  }

  render() {
    return(
      <div id = 'galleryCarouselDiv'>
        <div className='arrowDiv'>
          <i className="arrow up"></i>
        </div>
        {this.state.currentStyle.photos.map((photo, index) =>
          <div className = 'galleryCarouselImageFrame' key = {index} onClick={this.handleImageClick}>
            <img className = 'galleryCarouselFrame'
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