import {render, screen, cleanup, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import App from '../../client/src/index.jsx';
import ProductOverview from '../../client/src/components/ProductOverview/ProductOverview.jsx';

describe('ProductOverview component', () => {
  test('ProductOverview component should exist', async () => {
    const component = render(<ProductOverview />);
    const ProductOverviewElement = await component.findByTestId('test_ProductOverview');
    expect(ProductOverviewElement).toBeInTheDocument();
  });

})