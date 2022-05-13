import React from 'react';
import ReactDOM from 'react-dom';
import '../carousel.css';
import RelatedList from './RelatedList.jsx'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0

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

        <div className="card">

        </div>
        <div className="slider"
        style={{ transform: `translateX(-${this.state.currentIndex * (100 / this.props.show)}%)` }}
        >

          <div className="card">
            <img src="https://via.placeholder.com/150" alt="Avatar" ></img>
            <div className="container">
              <h4><b>John Doe</b></h4>
              <p>Architect and engineer</p>
            </div>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/150" alt="Avatar" ></img>
            <div className="container">
              <h4><b>John Doe</b></h4>
              <p>Architect and engineer</p>
            </div>
          </div>
          {/* <img src="https://via.placeholder.com/300"></img>
          <img src="https://via.placeholder.com/300"></img>
          <img src="https://via.placeholder.com/300"></img>
          <img src="https://via.placeholder.com/300"></img>
          <img src="https://via.placeholder.com/300"></img>
          <img src="https://via.placeholder.com/300"></img> */}

        </div>
      </div>




    )
  }

}

export default Carousel