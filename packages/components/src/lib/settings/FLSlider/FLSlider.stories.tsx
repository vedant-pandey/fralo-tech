import type { Meta } from '@storybook/react';
import { FLSlider } from './FLSlider';

const Story: Meta<typeof FLSlider> = {
  component: FLSlider,
  title: 'FLSlider',
};
export default Story;

export const Primary = {
  args: {
    value: 10,
  },
};