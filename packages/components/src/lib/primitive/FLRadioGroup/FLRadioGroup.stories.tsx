import type { Meta } from '@storybook/react';
import { FLRadioGroup } from './FLRadioGroup';

const Story: Meta<typeof FLRadioGroup> = {
  component: FLRadioGroup,
  title: 'FLRadioGroup',
};
export default Story;

export const Primary = {
  args: {
    ariaLabel: '',
    defaultValue: '',
    defaultIndex: 0,
  },
};
