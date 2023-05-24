import React from 'react';

import { capitalize, weightDescription } from '../../../utils/text';
import { ToolbarItem } from '../../editor';
import { FLMultiAccordion } from '@fralo-tech/components';

export const TextSettings = () => {
  return (
    <React.Fragment>
      <FLMultiAccordion
        items={[
          {
            title: 'Typography',
            props: ['fontSize', 'fontWeight', 'textAlign'],
            summary: ({ fontSize, fontWeight, textAlign }: any) => {
              return `${fontSize || ''}, ${weightDescription(
                fontWeight
              )}, ${capitalize(textAlign)}`;
            },
            children: [
              <ToolbarItem
                key={0}
                full={true}
                propKey="fontSize"
                type="slider"
                label="Font Size"
              />,
              <ToolbarItem
                key={1}
                propKey="textAlign"
                type="radio"
                label="Align"
                radioValues={[
                  { value: 'left', label: 'Left' },
                  { value: 'center', label: 'Center' },
                  { value: 'right', label: 'Right' },
                ]}
              />,
              <ToolbarItem
                key={2}
                propKey="fontWeight"
                type="radio"
                label="Weight"
                radioValues={[
                  { label: 'Regular', value: '400' },
                  { label: 'Medium', value: '500' },
                  { label: 'Bold', value: '700' },
                ]}
              />,
            ],
          },
          {
            title: 'Margin',
            props: ['margin'],
            summary: ({ margin }: any) => {
              return `${margin[0] || 0}px ${margin[1] || 0}px ${
                margin[2] || 0
              }px ${margin[3] || 0}px`;
            },
            children: [
              <ToolbarItem
                propKey="margin"
                index={0}
                type="slider"
                label="Top"
                key={0}
              />,
              <ToolbarItem
                propKey="margin"
                index={1}
                type="slider"
                label="Right"
                key={1}
              />,
              <ToolbarItem
                propKey="margin"
                index={2}
                type="slider"
                label="Bottom"
                key={2}
              />,
              <ToolbarItem
                propKey="margin"
                index={3}
                type="slider"
                label="Left"
                key={3}
              />,
            ],
          },
          {
            title: 'Appearance',
            props: ['color', 'shadow'],
            summary: ({ color, shadow }: any) => {
              return (
                <div className="fletext-right">
                  <p
                    style={{
                      color: color && `rgba(${Object.values(color)})`,
                      textShadow: `0px 0px 2px rgba(0, 0, 0, ${shadow / 100})`,
                    }}
                    className="text-white text-right"
                  >
                    T
                  </p>
                </div>
              );
            },
            children: [
              <ToolbarItem
                key={0}
                full={true}
                propKey="color"
                type="color"
                label="Text"
              />,
              <ToolbarItem
                key={1}
                full={true}
                propKey="shadow"
                type="slider"
                label="Shadow"
              />,
            ],
          },
        ]}
      />
    </React.Fragment>
  );
};
