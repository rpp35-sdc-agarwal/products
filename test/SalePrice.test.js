import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import SalePrice from '../client/src/relatedItems/SalePrice.jsx';

describe('SalePrice component', () => {
  test('SalePrice component should exist', () => {
    render(<SalePrice />);
    screen.debug();
  });
 });