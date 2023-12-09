import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage Component', () => {
  test('renders homepage content', () => {
    render(<HomePage />);

    // Check if certain elements or text are present on the page
    expect(screen.getByText('HOMEPAGE!!')).toBeInTheDocument();
    expect(screen.getByText('Stay on track')).toBeInTheDocument();
    expect(screen.getByText('Alerts')).toBeInTheDocument();
    expect(screen.getByText('Results')).toBeInTheDocument();
    expect(screen.getByText('Free')).toBeInTheDocument();
  });
});
