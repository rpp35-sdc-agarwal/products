import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import CardModal from '../client/src/relatedItems/CardModal.jsx';

describe('CardModal component', () => {
  test('CardModal component should exist', () => {
    render(<CardModal />);
    const CardModalElement = screen.getByTestId('test-modal');
    expect(CardModalElement).toBeInTheDocument();
  });
 });