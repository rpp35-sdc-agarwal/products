import React from 'react'
import '../carousel.css'

const Carousel = (props) => {
  const {children} = props

  return (
      <div className="carousel-container">
          <div className="carousel-wrapper">
            <button className="left-arrow">
                &lt;
            </button>
              <div className="carousel-content-wrapper">
                  <div className="carousel-content">
                      {children}
                  </div>
              </div>
            <button className="right-arrow">
                &gt;
            </button>
          </div>
      </div>
  )
}

export default Carousel