import React from 'react';

import { ToolbarItem } from '../../editor';
import { FLMultiAccordion } from '@fralo-tech/components';

export const ContainerSettings = () => {
  return (
    <>
      <FLMultiAccordion
        items={[
          {
            children: [
              <ToolbarItem propKey="width" type="text" label="Width" key={0} />,
              <ToolbarItem
                propKey="height"
                type="text"
                label="Height"
                key={1}
              />,
            ],
            props: ['width', 'height'],
            summary: ({ width, height }: any) => {
              return `${width || 0} x ${height || 0}`;
            },
            title: 'Dimensions',
          },
          {
            children: [
              <ToolbarItem
                full={true}
                propKey="background"
                type="bg"
                label="Background"
                key={0}
              />,
              <ToolbarItem
                full={true}
                propKey="color"
                type="color"
                label="Text"
                key={1}
              />,
            ],
            props: ['background', 'color'],
            summary: ({ background, color }: any) => {
              return (
                <div className="flex flex-row-reverse">
                  <div
                    style={{
                      background:
                        background && `rgba(${Object.values(background)})`,
                    }}
                    className="shadow-md flex-end w-6 h-6 text-center flex items-center rounded-full bg-black"
                  >
                    <p
                      style={{
                        color: color && `rgba(${Object.values(color)})`,
                      }}
                      className="text-white w-full text-center"
                    >
                      T
                    </p>
                  </div>
                </div>
              );
            },
            title: 'Colors',
          },
          {
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
            props: ['margin'],
            summary: ({ margin }: any) => {
              return `${margin[0] || 0}px ${margin[1] || 0}px ${
                margin[2] || 0
              }px ${margin[3] || 0}px`;
            },
            title: 'Margin',
          },
          {
            children: [
              <ToolbarItem
                propKey="padding"
                index={0}
                type="slider"
                label="Top"
                key={0}
              />,
              <ToolbarItem
                propKey="padding"
                index={1}
                type="slider"
                label="Right"
                key={1}
              />,
              <ToolbarItem
                propKey="padding"
                index={2}
                type="slider"
                label="Bottom"
                key={2}
              />,
              <ToolbarItem
                propKey="padding"
                index={3}
                type="slider"
                label="Left"
                key={3}
              />,
            ],
            props: ['padding'],
            summary: ({ padding }: any) => {
              return `${padding[0] || 0}px ${padding[1] || 0}px ${
                padding[2] || 0
              }px ${padding[3] || 0}px`;
            },
            title: 'Padding',
          },
          {
            children: [
              <ToolbarItem
                key={0}
                full={true}
                propKey="radius"
                type="slider"
                label="Radius"
              />,
              <ToolbarItem
                key={1}
                full={true}
                propKey="shadow"
                type="slider"
                label="Shadow"
              />,
            ],
            props: ['radius', 'shadow'],
            title: 'Decoration',
          },
          {
            children: [
              <ToolbarItem
                key={0}
                propKey="flexDirection"
                type="radio"
                label="Flex Direction"
                radioValues={[
                  { value: 'row', label: 'Row' },
                  { value: 'column', label: 'Column' },
                ]}
              />,
              <ToolbarItem
                key={1}
                propKey="fillSpace"
                type="radio"
                label="Fill space"
                radioValues={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' },
                ]}
              />,
              <ToolbarItem
                key={2}
                propKey="alignItems"
                type="radio"
                label="Align Items"
                radioValues={[
                  { value: 'flex-start', label: 'Flex start' },
                  { value: 'center', label: 'Center' },
                  { value: 'flex-end', label: 'Flex end' },
                ]}
              />,
              <ToolbarItem
                key={3}
                propKey="justifyContent"
                type="radio"
                label="Justify Content"
                radioValues={[
                  { value: 'flex-start', label: 'Flex start' },
                  { value: 'center', label: 'Center' },
                  { value: 'flex-end', label: 'Flex end' },
                ]}
              />,
            ],
            title: 'Alignment',
          },
        ]}
      />
    </>
  );
};
