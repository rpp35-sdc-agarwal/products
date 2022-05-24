import React from 'react';
import ReactDOM from 'react-dom';
// import '../carousel.css';
import RelatedList from './RelatedList.jsx'
import Card from './Card.jsx'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,


    }
    console.log('what are props', props)
    this.handleShift = this.shiftCarousel.bind(this);
    this.handleShiftRight = this.shiftCarouselRight.bind(this);
  }

  shiftCarousel() {
    console.log('i made it here');
    this.setState({
      currentIndex: this.state.currentIndex + 1
    }, () => console.log('i clicked a button'))
  }

  shiftCarouselRight() {
    console.log('i made it here');
    this.setState({
      currentIndex: this.state.currentIndex -1
    }, () => console.log('i clicked a button'))
  }




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
        <div className="slider">
          <RelatedList products={this.props.products}
          type={this.props.type}
          isRelated={true}
          ratings={this.props.ratings}
          shift={this.state.currentIndex}
          handleShift={this.handleShift}
          handleShiftRight={this.handleShiftRight}
          />

        </div>
      </div>




    )
  }

}

export default Carousel