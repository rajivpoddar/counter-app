import { render, screen } from '@testing-library/react';
import App from './App';

test('renders counter', () => {
  render(<App />);
  const counterElement = screen.getByText(/counter/i);
  expect(counterElement).toBeInTheDocument();
});

test('renders increment button', () => {
  render(<App />);
  const incrementButton = screen.getByText(/increment/i);
  expect(incrementButton).toBeInTheDocument();
});

test('renders decrement button', () => {
  render(<App />);
  const decrementButton = screen.getByText(/decrement/i);
  expect(decrementButton).toBeInTheDocument();
});

test('renders reset button', () => {
  render(<App />);
  const resetButton = screen.getByText(/reset/i);
  expect(resetButton).toBeInTheDocument();
});