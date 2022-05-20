import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import StarRating from '../client/src/relatedItems/StarRating.jsx';

describe('Star component', () => {
  test('Star component should exist', () => {
    render(<StarRating />);
    screen.debug();
  });
 });