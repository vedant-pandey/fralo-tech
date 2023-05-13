import './FLSlider.css';

import { Slider, SliderProps } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export type FLSliderProps = SliderProps;

export function FLSlider(props: FLSliderProps) {
  const iOSBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

  const SliderStyled = withStyles({
    root: {
      color: '#3880ff',
      height: 2,
      padding: '5px 0',
      width: '100%',
    },
    thumb: {
      height: 14,
      width: 14,
      backgroundColor: '#fff',
      boxShadow: iOSBoxShadow,
      marginTop: -7,
      marginLeft: -7,
      '&:focus,&:hover,&$active': {
        boxShadow:
          '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          boxShadow: iOSBoxShadow,
        },
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 11px)',
      top: -22,
      '& *': {
        background: 'transparent',
        color: '#000',
      },
    },
    track: {
      height: 2,
    },
    rail: {
      height: 2,
      opacity: 0.5,
      backgroundColor: '#bfbfbf',
    },
    mark: {
      backgroundColor: '#bfbfbf',
      height: 8,
      width: 1,
      marginTop: -3,
    },
    markActive: {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  })(Slider);

  return (
    <SliderStyled {...props} />
  );
}

export default FLSlider;
