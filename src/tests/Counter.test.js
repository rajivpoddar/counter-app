import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

test('renders counter value', () => {
  render(<Counter />);
  const counterElement = screen.getByText(/counter: 0/i);
  expect(counterElement).toBeInTheDocument();
});

test('increments counter value', () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/increment/i);
  fireEvent.click(incrementButton);
  const counterElement = screen.getByText(/counter: 1/i);
  expect(counterElement).toBeInTheDocument();
});

test('decrements counter value', () => {
  render(<Counter />);
  const decrementButton = screen.getByText(/decrement/i);
  fireEvent.click(decrementButton);
  const counterElement = screen.getByText(/counter: -1/i);
  expect(counterElement).toBeInTheDocument();
});

test('resets counter value', () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/increment/i);
  fireEvent.click(incrementButton);
  const resetButton = screen.getByText(/reset/i);
  fireEvent.click(resetButton);
  const counterElement = screen.getByText(/counter: 0/i);
  expect(counterElement).toBeInTheDocument();
});