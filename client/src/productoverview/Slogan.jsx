import React from 'react';
class Slogan extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productInfo: this.props.productInfo
    }
  }

  render() {
    return(
      <div id='sloganDiv' className='childDiv'>
        <div>
          {this.state.productInfo.slogan}
        </div>
        <div>
          {this.state.productInfo.description}
        </div>
        <div>
          {this.state.productInfo.features.map((item, index) =>
            <div key = {index}>
              {item.feature}: {item.value}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Slogan;