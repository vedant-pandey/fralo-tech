import styles from './index.module.css';
import React from 'react';
import classNames from 'classnames';
import { RxChevronDown } from 'react-icons/rx';
import * as Accordion from '@radix-ui/react-accordion';
import { Divider, Grid } from '@material-ui/core';
import { useNode } from '@fralo-tech/builder-core';

export interface FLAccordionProps {
  summary?: unknown;
  children?: JSX.Element | JSX.Element[] | ((e: unknown) => JSX.Element);
  title?: string;
  props?: unknown;
}

export const FLAccordion = ({
  title,
  props,
  summary,
  children,
}: FLAccordionProps) => {
  const { nodeProps } = useNode((node) => ({
    nodeProps:
      props &&
      props.reduce((res: any, key: any) => {
        res[key] = node.data.props[key] || null;
        return res;
      }, {}),
  }));
  return (
    <Accordion.Root
      className="bg-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <Accordion.Item
        value="item-1"
        className="focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]"
      >
        <Accordion.Trigger className="w-full text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none">
          <div className="px-6 w-full">
            <Grid container direction="row" alignItems="center" spacing={3}>
              <Grid item xs={4}>
                <h5 className="text-sm text-light-gray-1 text-left font-medium text-dark-gray">
                  {title}
                </h5>
              </Grid>
              {summary && props ? (
                <Grid item xs={8}>
                  <h5 className="text-light-gray-2 text-sm text-right text-dark-blue">
                    {summary(
                      props.reduce((acc: any, key: any) => {
                        acc[key] = nodeProps[key];
                        return acc;
                      }, {})
                    )}
                  </h5>
                </Grid>
              ) : null}
            </Grid>
          </div>
          <RxChevronDown
            className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
            aria-hidden
          />
        </Accordion.Trigger>
        <Accordion.Content className="text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]">
          <Divider />
          <Grid container spacing={1}>
            {children}
          </Grid>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default FLAccordion;
