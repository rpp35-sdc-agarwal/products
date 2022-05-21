import {render, fireEvent, waitFor, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import App from '../client/src/index.jsx';

// test('' , () => {});

describe('Reviews container', () => {
  test('Reviews should be mounted to App' , () => {
    render(<App />);
    const Container = screen.getByTestId('test_revContainer');
    expect(Container).toBeInTheDocument();
    console.log('Reviews Container mounted')
  });

  test('top level components should exist' , () => {
    render(<App />);
    expect(screen.getByTestId('test_revSort')).toBeInTheDocument();
    expect(screen.getByTestId('test_revProductBreakdown')).toBeInTheDocument();
    expect(screen.getByTestId('test_revRatingBreakdown')).toBeInTheDocument();
    console.log('Top level components mounted')
  });

  test('Sub components should exits', () => {
    render(<App />);
    expect(screen.getByTestId('test_revList')).toBeInTheDocument();
    console.log('Sub components exist');
  })
});