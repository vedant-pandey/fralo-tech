import { render } from '@testing-library/react';

import FLSlider from './FLSlider';

describe('FLSlider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FLSlider />);
    expect(baseElement).toBeTruthy();
  });
});
