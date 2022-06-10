import React from 'react';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: this.props.styles,
      currentStyle: this.props.currentStyle
    };
    this.handleStyleClick = this.handleStyleClick.bind(this);
    this.isSelected = this.isSelected.bind(this);
  }

  handleStyleClick(e) {
    this.props.handleStyleChange(e.target[Object.keys(e.target)[1]].value);
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      currentStyle: props.currentStyle,
      styles: props.styles
    })
  }

  isSelected(styleId) {
    if(styleId === this.state.currentStyle.style_id) {
      return 'CheckMark';
    } else {
      return 'hideCheckMark';
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
            <div className = {this.isSelected(style.style_id)}>&#10003;</div>
            <img onClick={this.handleStyleClick}
              src = {style.photos[0].thumbnail_url} value = {style.style_id}
            />
          </div>
        )}
        </div>
      </div>
    )
  }
}

export default StyleSelector;