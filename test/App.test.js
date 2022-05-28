import {render, screen, cleanup, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import App from '../client/src/index.jsx';

describe('App component', () => {
  test('App component should exist', async () => {
    const component = render(<App />);
    const AppElement = await component.findByTestId('test_app');
    expect(AppElement).toBeInTheDocument();
  });
});