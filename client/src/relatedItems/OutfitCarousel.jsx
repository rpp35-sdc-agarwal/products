import React from 'react';
import ReactDOM from 'react-dom';

import OutfitList from './OutfitList.jsx';
import AddOutfit from './AddOutfit.jsx'


class OutfitCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 1

    }
  }


//   next(){
//     if (this.state.currentIndex < (this.state.length - this.props.show)) {
//         this.setState({
//           currentIndex: this.state.currentIndex + 1
//         })
//     }
//   }

//   prev(){
//     if (this.state.currentIndex > 0) {
//         this.setState({
//           currentIndex: this.state.currentIndex - 1
//         })
//     }
// }

  render() {

    return (
      <div className="wrapper">
        <AddOutfit />

        <div className="slider">
          <OutfitList products={this.props.products}

          isRelated={false}
          ratings={this.props.ratings}
          shift={this.props.shift}
          handleShiftLeft={this.props.handleShiftLeft}
          type={this.props.type}
          handleShiftRight={this.props.handleShiftRight}
          />

        </div>
      </div>


    )
  }

}

export default OutfitCarousel