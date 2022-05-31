import React from 'react';
import ReactDOM from 'react-dom';

import RelatedList from './RelatedList.jsx';
import AddOutfit from './AddOutfit.jsx'
import axios from 'axios';


class OutfitCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 1,
      outfitItems: [],
      currentProductId: ''
    }
    this.addOutfit = this.addOutfit.bind(this);
  }

  addOutfit(id) {
    axios.get(`/products/${id}/addOutfit`)
    .then((res) => {
      this.setState({
        outfitItems: res.data
      }, () => console.log(this.state.relatedItems))
    })
    .catch((err) => console.log('there was an error'))

  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.currentProductId !== this.props.currentProductId) {
  //     this.setState({
  //       currentProductId: this.props.currentProductId
  //     }, () => {
  //       axios.get(`/products/${this.state.currentProductId}/addOutfit`)
  //       .then((res) => {
  //         this.setState({
  //           outfitItems: res.data
  //         }, () => console.log(this.state.relatedItems))
  //       })
  //       .catch((err) => console.log('there was an error'))
  //     })
  //   }
  // }


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
        <AddOutfit addOutfit={this.addOutfit}/>

        <div className="slider">
          <RelatedList
          products={this.state.outfitItems}
          type={"outfit"}
          isRelated={false}
          />

        </div>
      </div>


    )
  }

}

export default OutfitCarousel