import React from 'react';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: this.props.styles,
      currentStyle: this.props.currentStyle
    }
  }

  render() {
    return(
      <div className='childDiv'>
        <div>
          STYLE > {this.state.currentStyle.name}
        </div>
        <div id = 'styleSelector'>
        {this.state.styles.map((style, index) =>
          <div className = 'styleThumbnail' key = {index}>
            <img className = 'styleThumbnailImage'
              src = {style.photos[0].thumbnail_url} value = {index}
            />
          </div>
        )}
        </div>
      </div>
    )
  }
}

export default StyleSelector;