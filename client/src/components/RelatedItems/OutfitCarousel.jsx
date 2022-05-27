import React from 'react';
import ReactDOM from 'react-dom';

import OutfitList from './OutfitList.jsx';
import AddOutfit from './AddOutfit.jsx'


class OutfitCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0

    }
    this.shiftCarouselOutfitLeft = this.shiftCarouselOutfit.bind(this);
    this.shiftCarouselOutfitRight = this.shiftCarouselRightOutfit.bind(this);
  }

  shiftCarouselOutfit() {
    console.log('i made it here');
    this.setState({
      currentIndex: this.state.currentIndex + 1
    }, () => console.log('i clicked a button'))
  }

  shiftCarouselRightOutfit() {
    console.log('i made it here');
    this.setState({
      currentIndex: this.state.currentIndex -1
    }, () => console.log('i clicked a button'))
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
          shift={this.state.currentIndex}
          handleShiftLeft={this.shiftCarouselOutfitLeft}
          type={this.props.type}
          handleShiftRight={this.shiftCarouselOutfitRight}
          />

        </div>
      </div>


    )
  }

}

export default OutfitCarousel