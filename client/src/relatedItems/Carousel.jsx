import React from 'react';
import ReactDOM from 'react-dom';
import '../carousel.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      length: this.props.imgs.length
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.imgs.length !== prevProps.imgs.length) {
      this.setState({
        length: this.props.imgs.length
      })
    }
  }

  next(){
    if (this.state.currentIndex < (this.state.length - 1)) {
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
    var imgs = this.props.imgs.map((img) => {
      return <img src={img}></img>
    })

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
              {this.state.currentIndex > 0 &&
              <button onClick={this.prev.bind(this)} className="left-arrow">
                  &lt;
              </button>
              }
                <div className="carousel-content-wrapper">
                    <div className="carousel-content"
                    style={{ transform: `translateX(-${this.state.currentIndex * 100}%)` }}
                    >
                        {imgs}
                    </div>
                </div>
              {this.state.currentIndex < (this.state.length - 1) &&
              <button onClick={this.next.bind(this)} className="right-arrow">
                  &gt;
              </button>
              }
            </div>
        </div>
    )
  }

}

export default Carousel