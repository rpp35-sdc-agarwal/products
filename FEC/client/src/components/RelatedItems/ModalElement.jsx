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
      <td className="related-items-row-name">
        {k}
      </td>
      
      <td className="related-items-rows">
        {o}
      </td>

      <td className="related-items-rows">
        {m}
      </td>

    </tr>
  )
}

export default ModalElement;

