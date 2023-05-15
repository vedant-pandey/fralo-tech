import { render } from '@testing-library/react';

import FLAccordion from './index';

describe('FLAccordion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FLAccordion />);
    expect(baseElement).toBeTruthy();
  });
});
