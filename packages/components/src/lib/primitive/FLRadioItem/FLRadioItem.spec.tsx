import { render } from '@testing-library/react';

import FLRadioItem from './FLRadioItem';

describe('FLRadioItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FLRadioItem />);
    expect(baseElement).toBeTruthy();
  });
});
