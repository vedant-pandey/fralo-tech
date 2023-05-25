import { render } from '@testing-library/react';

import FLInput from './index';

describe('FLInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FLInput />);
    expect(baseElement).toBeTruthy();
  });
});
