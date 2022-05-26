import React from 'react';

const ModalElement = ({overviewValue, k, modalValue}) => {
  var o = ' ';
  if (overviewValue) {
    o = overviewValue;
  }

  var m = ' ';
  if (modalValue) {
    m = modalValue;
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

