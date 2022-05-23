import {render, fireEvent, waitFor, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import App from '../client/src/index.jsx';

describe('ProductOverview container', () => {
  test('ProductOverview should be mounted to App' , () => {
    render(<App />);
    const container = screen.getByTestId('test_poContainer');
    expect(container).toBeInTheDocument();
  });

});