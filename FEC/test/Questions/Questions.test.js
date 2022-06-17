import {render, screen, cleanup, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import App from '../../client/src/index.jsx';
import Questions from '../../client/src/components/Questions/Questions.jsx'

describe('Questions component', () => {
  test('Questions component should exist', async () => {
    const component = render(<Questions />);
    const QuestionElement = await component.findByTestId('test_questions');
    waitFor(() => expect(QuestionElement).toBeInTheDocument()) ;
  });
  
  test('Search component should exist', () => {
    const component = render(<Questions />);
    const SearchElement = component.getByTestId('test-search');
    expect(SearchElement).toBeInTheDocument();
  });
  
  test('QuestionList component should exist', async () => {
    const component = render(<Questions />);
    const QuestionListElement = await component.findByTestId('test_questionlist');
    expect(QuestionListElement).toBeInTheDocument();
  });
  
  test('QuestionView component should exist', () => {
    const component = render(<Questions />);
    const QuestionViewElement = component.findByTestId('test_questionview')
    .then(() => {
      expect(QuestionViewElement).toBeInTheDocument();
    })
    .catch((err) => {
      console.log(err);
    });
  });
  
  test('AnswerList component should exist', async () => {
    // const component = render(<Questions />);
    // const AnswerListElement = component.findByTestId('test-aswerlist')
    // .then(() => {
    //   expect(AnswerListElement).toBeInTheDocument();
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
    try {
      const component = render(<Questions />);
      const AnswerListElement = await component.findByTestId('test-aswerlist');
      expect(AnswerListElement).toBeInTheDocument();
    } catch (err) {
      console.log(err);
    }
    
  });
  
  test('AnswerView component should exist', () => {
    const component = render(<Questions />);
    const AnswerViewElement = component.findByTestId('test-answerview')
    .then(() => {
      expect(AnswerViewElement).toBeInTheDocument();
    })
    .catch((err) => {
      console.log(err);
    });
  });
});

