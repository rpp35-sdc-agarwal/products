import React from 'react';
import ReactDOM from 'react-dom';

import RelatedList from './RelatedList.jsx';
import AddOutfit from './AddOutfit.jsx'
import axios from 'axios';


class OutfitCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      outfitItems: [],
      currentProductId: ''
    }
    this.addOutfit = this.addOutfit.bind(this);
    this.deleteOutfit = this.deleteOutfit.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  addOutfit(id) {
    axios.post(`/addOutfit`, {
      "product_id": this.props.currentProductId
    })
    .then((res) => {
      this.setState({
        outfitItems: res.data
      }, () => console.log(this.state.outfitItems))
    })
    .catch((err) => console.log('there was an error'))

  }

  deleteOutfit(id) {
    axios.post(`/deleteOutfit`, {
      "product_id": this.props.currentProductId
    })
    .then((res) => {
      this.setState({
        outfitItems: res.data
      }, () => console.log(this.state.outfitItems))
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


  next(){
    if (this.state.currentIndex < (this.state.outfitItems.length - 3)) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      })
    }
  }

  prev(){
    if (this.state.currentIndex > 0) {

      this.setState({
        currentIndex: this.state.currentIndex - 1
      })
    }

}

  render() {

    return (
      <div className="wrapper">
        <AddOutfit addOutfit={this.addOutfit}
        currentProductId={this.props.currentProductId}/>

        <div className="slider">
        {
            this.state.currentIndex > 0 &&
          <button className="cButton leftSide" onClick={this.prev}>
            <i class="arrow left"></i>
          </button>
          }
          <RelatedList
          products={this.state.outfitItems}
          type={"outfit"}
          isRelated={false}
          deleteOutfit={this.deleteOutfit}
          />
        </div>
        {this.state.currentIndex < (this.state.outfitItems.length - 3) &&

        <button className="cButton rightSide" onClick={this.next}>
          <i class="arrow right"></i>
        </button>
        }
      </div>


    )
  }

}

export default OutfitCarousel