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
      relatedItems: [],
      currentProductId: ''

    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentProductId !== this.props.currentProductId) {
      this.setState({
        currentProductId: this.props.currentProductId
      }, () => console.log('state.id in carousel', this.state.currentProductId))
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
    console.log('props in carousel: ', this.props);
    return (

      <div className="wrapper">
        <div className="slider">
          <RelatedList products={this.props.products}
          isRelated={true}
          ratings={this.props.ratings}/>
        </div>
      </div>




    )
  }

}

export default Carousel