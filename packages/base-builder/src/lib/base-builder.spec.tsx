import { render } from '@testing-library/react';

import BaseBuilder from './base-builder';

describe('BaseBuilder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BaseBuilder />);
    expect(baseElement).toBeTruthy();
  });
});
