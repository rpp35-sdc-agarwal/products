import React from 'react';
import ReactDOM from 'react-dom';

import RelatedList from './RelatedList.jsx';
import AddOutfit from './AddOutfit.jsx'


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
        <AddOutfit />

        <div className="slider">
          <RelatedList products={this.props.products} type={"outfit"} isRelated={false}/>

        </div>
      </div>


    )
  }

}

export default OutfitCarousel