import { render } from '@testing-library/react';

import FLRadioGroup from '.';

describe('FLRadioGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FLRadioGroup />);
    expect(baseElement).toBeTruthy();
  });
});
