import { render } from '@testing-library/react';

import FLSlider from './index';

describe('FLSlider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FLSlider />);
    expect(baseElement).toBeTruthy();
  });
});
