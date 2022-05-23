import React from 'react';
import ReactDOM from 'react-dom';
// import '../carousel.css';
import RelatedList from './RelatedList.jsx'
import Card from './Card.jsx'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 2,
      width: 210

    }
  }


  next(){

    this.setState({
      currentIndex: this.state.currentIndex + 1
    })

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

          isRelated={true}
          ratings={this.props.ratings}
          shift={this.state.currentIndex}
          width={this.state.width}
          next={this.next.bind(this)}/>

        </div>
      </div>




    )
  }

}

export default Carousel