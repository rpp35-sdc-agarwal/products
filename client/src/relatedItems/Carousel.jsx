import React from 'react';
import ReactDOM from 'react-dom';
import '../carousel.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
              <button className="left-arrow">
                  &lt;
              </button>
                <div className="carousel-content-wrapper">
                    <div className="carousel-content">
                        {this.props.children}
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