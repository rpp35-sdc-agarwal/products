import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import SalePrice from '../../client/src/components/relatedItems/SalePrice.jsx';

describe('SalePrice component', () => {
  test('SalePrice component should exist', () => {
    render(<SalePrice />);
    const SalePriceElement = screen.getByTestId('test-modal-sale');
    expect(SalePriceElement).toBeInTheDocument();
  });
 });