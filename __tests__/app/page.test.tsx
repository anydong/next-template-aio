import Page from '@/app/[lng]/page';

import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';

describe('Page', () => {
  it('renders a button', () => {
    render(<Page />);

    const heading = screen.getByRole('button');

    expect(heading).toBeInTheDocument();
  });
});
