import React from 'react';
import ReactDOM from 'react-dom';
import '../carousel.css';
import RelatedList from './RelatedList.jsx'

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
        <div className="slider"

        >
          <img src="https://via.placeholder.com/300"></img>
          <div className="imageWrapper"
          style={{ transform: `translateX(-${this.state.currentIndex * (100 / this.props.show)}%)` }}
          >

            <img src="https://via.placeholder.com/300"></img>
            <img src="https://via.placeholder.com/300"></img>
            <img src="https://via.placeholder.com/300"></img>
            <img src="https://via.placeholder.com/300"></img>
            <img src="https://via.placeholder.com/300"></img>
          </div>


        </div>
      </div>



    )
  }

}

export default OutfitCarousel