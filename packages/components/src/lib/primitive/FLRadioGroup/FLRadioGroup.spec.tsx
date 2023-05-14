import { render } from '@testing-library/react';

import FLRadioGroup from './FLRadioGroup';

describe('FLRadioGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FLRadioGroup />);
    expect(baseElement).toBeTruthy();
  });
});
