import React from 'react';

const ModalElement = ({modalData}) => {
  return (
    <tr>
      <td>
        {modalData.name}
      </td>
      <td>
        name
      </td>
      <td>
        {modalData.slogan}
      </td>

    </tr>
  )
}

export default ModalElement;

