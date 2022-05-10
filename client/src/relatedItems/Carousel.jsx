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

  next = () => {
    if (this.state.currentIndex < (this.state.length - 1)) {
        this.setState({
          currentIndex: this.state.currentIndex + 1
        })
    }
}

  prev = () => {
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
              <button onClick={this.prev} className="left-arrow">
                  &lt;
              </button>
                <div className="carousel-content-wrapper">
                    <div className="carousel-content"
                    style={{ transform: `translateX(-${this.state.currentIndex * 100}%)` }}
                    >
                        {imgs}
                    </div>
                </div>
              <button onClick={this.next} className="right-arrow">
                  &gt;
              </button>
            </div>
        </div>
    )
  }

}

export default Carousel