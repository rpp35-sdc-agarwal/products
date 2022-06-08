import React from 'react';
import ReactDOM from 'react-dom';
// import '../carousel.css';
import RelatedList from './RelatedList.jsx'
import Card from './Card.jsx'
import axios from 'axios';
import CardModal from './CardModal.jsx'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      relatedItems: [],
      currentProductId: '',
      clickedProduct: null,
      overviewProduct: null,
      compare: false

    }
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentProductId !== this.props.currentProductId) {
      this.setState({
        currentProductId: this.props.currentProductId
      }, () => {
        console.log('what is current id', this.state.currentProductId)
        var promises = [];
        promises.push(axios.get(`/products/${this.state.currentProductId}/related`))
        promises.push(axios.get(`/products/${this.state.currentProductId}`))
        axios.all(promises)
        .then(res => {
          this.setState({
            relatedItems: res[0].data,
            overviewProduct: res[1].data
          }, () => console.log('this.state.relatedItems', this.state.relatedItems,
          'this.state.overviewproduct', this.state.overviewProduct))
        })

      })





        // })
        // .then(axios.spread((data1) => {
        //   console.log('data1', data1)
        //   var relatedItems = data1;

        //   this.setState({
        //     relatedItems: relatedItems,


        //   }, () => console.log('related items in carousel', this.state.relatedItems,
        //   'overviewproduct in carousel',this.state.overviewProduct))
        // }))
        // .catch((err) => console.log('there was an error'))
      }

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



  next(){
    if (this.state.currentIndex < (this.state.relatedItems.length - 3)) {
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

  handleModalClick(product) {
    this.setState({
      clickedProduct: product,
      compare: !this.state.compare
    })
  }

  toggleModal() {
    this.setState({
      compare: !this.state.compare
    })
  }

  render() {

    return (

      <div className="wrapper" data-testid="test-carousel">
        { this.state.compare &&
          <CardModal modalData={this.state.clickedProduct}
          overviewProduct={this.state.overviewProduct}
          toggleModal={this.toggleModal}/>
        }
        <div className="slider">
          {
            this.state.currentIndex > 0 &&
          <button className="cButton leftSide" onClick={this.prev}>
            <i class="arrow left"></i>
          </button>
          }
          <RelatedList
          products={this.state.relatedItems}
          type={'related'}
          isRelated={true}
          shift={this.state.currentIndex}
          handleModalClick={this.handleModalClick}
          handleItemClick={this.props.handleItemClick}
          />

          {this.state.currentIndex < (this.state.relatedItems.length - 3) &&

          <button className="cButton rightSide" onClick={this.next}>
            <i className="arrow right"></i>
          </button>
          }
        </div>
      </div>




    )
  }

}

export default Carousel