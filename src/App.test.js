// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AxisStar title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AxisStar/i);
    expect(titleElement).toBeInTheDocument();
});
