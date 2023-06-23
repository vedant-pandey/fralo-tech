import { render } from '@testing-library/react';

import FLDragSlider from './index';

describe('FLDragSlider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FLDragSlider />);
    expect(baseElement).toBeTruthy();
  });
});
