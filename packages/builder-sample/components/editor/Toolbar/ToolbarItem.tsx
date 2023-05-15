import { useNode } from '@fralo-tech/builder-core';
import { Grid } from '@material-ui/core';
import React, { ChangeEvent, useCallback } from 'react';
import { FLRadioGroup, FLSlider, RadioItemProps } from '@fralo-tech/components';

import { ToolbarTextInput } from './ToolbarTextInput';

export type ToolbarItemProps = {
  prefix?: string;
  label?: string;
  full?: boolean;
  propKey?: string;
  index?: number;
  children?: React.ReactNode;
  type: string;
  onChange?: (value: any) => any;
  radioValues?: RadioItemProps[]
};
export const ToolbarItem = ({
  full = false,
  propKey,
  type,
  onChange,
  index,
  ...props
}: ToolbarItemProps) => {
  if (!propKey) {
    return (<></>)
  }

  const {
    actions: { setProp },
    propValue,
  } = useNode((node) => ({
    propValue: node.data.props[propKey],
  }));

  const value = Array.isArray(propValue) ? propValue[index] : propValue;

  const sliderHandler = useCallback((_: ChangeEvent<object>, value: number | number[]): void => {
    setProp((props: any) => {
      if (Array.isArray(propValue)) {
        props[propKey][index] = onChange ? onChange(value) : value;
      } else {
        props[propKey] = onChange ? onChange(value) : value;
      }
    }, 1000);
  }, [index, onChange, propKey, propValue, setProp]);

  console.log(`Here - `, value)

  const radioChangeEvent = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setProp((props: any) => {
      props[propKey] = onChange ? onChange(value) : value;
    });
  };
  const radioChangeEvent2 = (value: string): void => {
    setProp((props: any) => {
      props[propKey] = onChange ? onChange(value) : value;
    });
  };
  return (
    <Grid item xs={full ? 12 : 6}>
      <div className="mb-2">
        {['text', 'color', 'bg', 'number'].includes(type) ? (
          <ToolbarTextInput
            {...props}
            type={type}
            value={value}
            onChange={(value) => {
              setProp((props: any) => {
                if (Array.isArray(propValue)) {
                  props[propKey][index] = onChange ? onChange(value) : value;
                } else {
                  props[propKey] = onChange ? onChange(value) : value;
                }
              }, 500);
            }}
          />
        ) : type === 'slider' ? (
          <>
            {props.label ? (
              <h4 className="text-sm text-light-gray-2">{props.label}</h4>
            ) : null}
            <FLSlider
              value={value ? parseInt(value) : 0}
              onChange={sliderHandler}
            />
          </>
        ) : type === 'radio' ? (
          <>
            {props.label ? (
              <h4 className="text-sm text-light-gray-2">{props.label}</h4>
            ) : null}
              <FLRadioGroup
                radioValues={props.radioValues}
                onChange={radioChangeEvent2}
                defaultIndex={0}
              />
          </>
        ) : null}
      </div>
    </Grid>
  );
};
