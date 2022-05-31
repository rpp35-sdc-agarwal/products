import React from 'react';


//take in an array of photos from the current review object
//render them in a small contained carousel
//
function Photos(props) {
  return(
    <div>
      {props.photos.map((photo) => {
        return (
          <img className="imgRev" src={photo.url} key={photo.id} alt="review image"></img>
        )
      })}
    </div>
  )
}

export default Photos;