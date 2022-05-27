import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Card from '../../client/src/components/relatedItems/Card.jsx';
import RelatedItems from '../../client/src/components/relatedItems/relatedItems.jsx';

xdescribe('CardModal component', () => {
  xtest('CardModal component should exist', () => {
    const component = render(<RelatedItems />);
    const CardModalElement = component.findByTestId('test-modal')
    .then(() => {
      expect(CardModalElement).toBeInTheDocument();
    })
    .catch((err) => {
      console.log(err);
    });
    // expect(CardModalElement).toBeInTheDocument();
  });
 });