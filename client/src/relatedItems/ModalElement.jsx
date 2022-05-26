import React from 'react';

const ModalElement = ({overviewValue, k, modalValue}) => {
  return (
    <tr>
      <td>
        {overviewValue}
      </td>
      <td>
      {k}
      </td>
      <td>
        {modalValue}
      </td>


    </tr>
  )
}

export default ModalElement;

