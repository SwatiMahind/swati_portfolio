import { render, screen } from '@testing-library/react';
import Projects from './Projects';

test('renders project heading', () => {
  render(<Projects />);
  const heading = screen.getByText(/my projects/i);
  expect(heading).toBeInTheDocument();
});
