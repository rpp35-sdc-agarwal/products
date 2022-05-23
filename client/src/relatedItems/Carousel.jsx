import React from 'react';
import ReactDOM from 'react-dom';
// import '../carousel.css';
import RelatedList from './RelatedList.jsx'
import Card from './Card.jsx'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {


    }
    console.log('what are props', props)

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
          shift={this.props.shift}
          handleShift={this.props.handleShift}
          handleShiftRight={this.props.handleShiftRight}
          />

        </div>
      </div>




    )
  }

}

export default Carousel