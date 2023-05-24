import type { Meta } from '@storybook/react';
import { FLTooltip } from '.';

const Story: Meta<typeof FLTooltip> = {
  component: FLTooltip,
  title: 'FLTooltip',
};
export default Story;

export const Primary = {
  args: {
    tooltipLabel: '',
    sideOffset: 0,
    delayDuration: 0,
  },
};
