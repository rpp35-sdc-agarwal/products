import {render, fireEvent, waitFor, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ReviewsContainer from './client/src/components/Reviews/ReviewsContainer.jsx';

// test('' , () => {});

describe('Reviews container', () => {
  test('Reviews should be mounted to App' , async () => {
    render(<ReviewsContainer />);
    const Container = screen.findByTestId('test_revContainer');
    expect(Container).toBeInTheDocument();
    console.log('Reviews Container mounted')
  });

  test('top level components should exist' , () => {
    render(<ReviewsContainer />);
    expect(screen.findByTestId('test_revSort')).toBeInTheDocument();
    expect(screen.findByTestId('test_revProductBreakdown')).toBeInTheDocument();
    expect(screen.findByTestId('test_revRatingBreakdown')).toBeInTheDocument();
    console.log('Top level components mounted')
  });

  test('Sub components should exits', () => {
    render(<ReviewsContainer />);
    expect(screen.findByTestId('test_revList')).toBeInTheDocument();
    console.log('Sub components exist');
  })
});