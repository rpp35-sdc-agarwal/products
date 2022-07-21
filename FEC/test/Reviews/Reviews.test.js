import {render, fireEvent, waitFor, component, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import App from '../../client/src/index.jsx';
import ReviewList from '../../client/src/components/Reviews/List.jsx';
import ReviewContainer from '../../client/src/components/Reviews/ReviewsContainer.jsx';

// test('' , () => {});

xdescribe('Reviews container', () => {
  xtest('Reviews should be mounted to App' , () => {
    const component = render(<ReviewContainer />);
    const Container = component.getByTestId('test_revContainer');
    expect(Container).toBeInTheDocument();
    console.log('Reviews Container mounted')
  });

  xtest('top level components should exist' , () => {
    const component = render(<ReviewContainer />);
    expect(component.getByTestId('test_revSort')).toBeInTheDocument();
    expect(component.getByTestId('test_revProductBreakdown')).toBeInTheDocument();
    expect(component.getByTestId('test_revRatingBreakdown')).toBeInTheDocument();
    console.log('Top level components mounted')
  });

  xtest('Sub components should exits', () => {
    const component = render(<ReviewContainer />);
    expect(component.getByTestId('test_revList')).toBeInTheDocument();
    console.log('Sub components exist');
  })
});