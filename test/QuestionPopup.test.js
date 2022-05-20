import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import QuestionPopup from '../client/src/components/Questions/QuestionPopup.jsx';

describe('Questions component', () => {
  test('Questions component should exist', () => {
    render(<QuestionPopup />);

    screen.debug();
  });
 });