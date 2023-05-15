import { render } from '@testing-library/react';

import FLTooltip from './FLTooltip';

describe('FLTooltip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FLTooltip />);
    expect(baseElement).toBeTruthy();
  });
});
