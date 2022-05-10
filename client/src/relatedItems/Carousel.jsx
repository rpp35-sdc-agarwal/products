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

  render() {
    var imgs = this.props.imgs.map((img) => {
      return <img src={img}></img>
    })

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
              <button className="left-arrow">
                  &lt;
              </button>
                <div className="carousel-content-wrapper">
                    <div className="carousel-content">
                        {imgs}
                    </div>
                </div>
              <button className="right-arrow">
                  &gt;
              </button>
            </div>
        </div>
    )
  }

}

export default Carousel