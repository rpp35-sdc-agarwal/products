import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Carousel from '../client/src/relatedItems/Carousel.jsx';

describe('Carousel should exist', () => {
  test('Carousel should exist', () => {

    render(<Carousel />);
    const CarouselElement = screen.getByTestId('test-carousel');
    expect(CarouselElement).toBeInTheDocument();
  });
 });