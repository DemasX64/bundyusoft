import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Calculator from '.';
import store from '../../services/store';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <Calculator />
    </Provider>,
  );
  const inputElement = screen.getByTestId('input');
  const answerElement = screen.queryByTestId('answer');
  const firstCountElement = screen.getByText('1');
  const operatorElement = screen.getByText('+');
  const secondCountElement = screen.getByText('2');
  const equalElement = screen.getByText('=');

  expect(inputElement).toBeInTheDocument();
  expect(equalElement).toBeInTheDocument();
  expect(firstCountElement).toBeInTheDocument();
  expect(operatorElement).toBeInTheDocument();
  expect(secondCountElement).toBeInTheDocument();
  expect(answerElement).toBeNull();

  fireEvent.click(firstCountElement);
  fireEvent.click(operatorElement);
  fireEvent.click(secondCountElement);
  fireEvent.click(equalElement);
  expect(screen.getByTestId('answer')).toBeInTheDocument();
  expect(inputElement).toContainHTML('1+2');
});
