import React, { useCallback, useEffect, useState } from 'react';
import styles from './index.module.css';

/* eslint-disable-next-line */
export interface FLDragSliderProps {
  onChange: unknown;
  label: React.ReactNode;
  defaultValue?: number;
  min?: number;
  max?: number;
}

export function FLDragSlider(props: FLDragSliderProps) {
  const { defaultValue=10, onChange, label, min=-Infinity } = props;
  const [value, setValue] = useState(defaultValue);
  
  return (
    <>
      <span>{value}</span>
      <input value={value} className='hidden'/>
    </>
  );
}

export default FLDragSlider;
