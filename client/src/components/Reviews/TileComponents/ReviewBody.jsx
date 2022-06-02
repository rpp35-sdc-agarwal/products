import React, { useState } from 'react';

function Body(props) {
  if (props.body.length >= 250) {
    //initialize with show more state
    //click handler will be to revert to initial stat
    var slice = props.body.slice(0, 249);
    var [body, moreText] = useState(<>{slice}<span onClick={wrapper}>... Show more</span></>);
    function wrapper() {
      moreText(body = <>{props.body}</>)
    }
  } else {
    //display the whole body
    var body = props.body;
  }



  return (
    <>
      {body}
    </>
  )
}

export default Body;