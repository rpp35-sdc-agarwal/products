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
          hello
        </div>
        <div className="card">
          goodbye
        </div>
        <div className="card">
          sayonara
        </div>

      </div>

    )
  }

}

export default Carousel