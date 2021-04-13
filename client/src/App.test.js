import { render, screen } from '@testing-library/react';
import { App, averageCalc} from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('shold return avg of 5 numbers', ()=>{
  expect(averageCalc(1,1,1,1,1)).toBe(1)
})