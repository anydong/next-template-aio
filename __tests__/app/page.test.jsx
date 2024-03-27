import Page from '@/app/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Page', () => {
  it('renders a button', () => {
    render(<Page />);

    const heading = screen.getByRole('button');

    expect(heading).toBeInTheDocument();
  });
});
