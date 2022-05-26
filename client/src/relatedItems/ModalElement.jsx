import React from 'react';

const ModalElement = ({overviewValue, k, modalValue}) => {
  var o = '';
  if (overviewValue) {
    o = "\u2713";
  }

  var m = '';
  if (modalValue) {
    m = "\u2713";
  }

  return (
    <tr>

      <td>
        {o}
      </td>

      <td>
      {k}
      </td>

      <td>
        {m}
      </td>



    </tr>
  )
}

export default ModalElement;

