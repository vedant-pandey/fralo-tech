import { render } from '@testing-library/react';

import IconSprite from './icon-sprite';

describe('IconSprite', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IconSprite />);
    expect(baseElement).toBeTruthy();
  });
});
