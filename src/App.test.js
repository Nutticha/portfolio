import { render, screen } from '@testing-library/react';
// import App from './App';
import About from './components/about/about.component'

test('renders learn react link', () => {
  render(<About />);
  const linkElement = screen.getByText(/ติดต่อดูผลงานได้ที่/i);
  expect(linkElement).toBeInTheDocument();
});



