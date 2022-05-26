import React from 'react';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: this.props.styles,
      currentStyle: this.props.currentStyle
    };
    this.handleStyleClick = this.handleStyleClick.bind(this);
  }

  handleStyleClick(e) {
    this.props.handleStyleChange(e.target[Object.keys(e.target)[1]].value);
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      currentStyle: props.currentStyle
    })
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
            <img className = 'styleThumbnailImage' onClick={this.handleStyleClick}
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