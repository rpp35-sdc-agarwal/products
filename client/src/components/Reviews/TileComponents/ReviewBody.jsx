import React, { useState } from 'react';

function Body(props) {
  var slice = props.body.slice(0, 249);
  var [body, moreText] = useState(<>{slice}<span onClick={wrapper}>... Show more</span></>);
  function wrapper() {
    moreText(body = <>{props.body}</>)
  }

  return (
    <>
      {body}
    </>
  )
}

export default Body;