import styles from './index.module.css';
import { RxChevronDown } from 'react-icons/rx';
import { useNode } from '@fralo-tech/builder-core';
import * as Accordion from '@radix-ui/react-accordion';

export interface FLAccordionItemProps {
  summary?: unknown;
  children?: JSX.Element | JSX.Element[] | ((e: unknown) => JSX.Element);
  title?: string;
  props?: unknown;
  accordionName?: string;
}

export interface FLMultiAccordionProps {
  items: FLAccordionItemProps[];
}

export const FLAccordionItem = ({
  title,
  props,
  summary,
  children,
  accordionName,
}: FLAccordionItemProps) => {
  if (!accordionName) accordionName = 'DEFAULT';

  const { nodeProps } = useNode((node) => ({
    nodeProps:
      props &&
      props.reduce((res: any, key: any) => {
        res[key] = node.data.props[key] || null;
        return res;
      }, {}),
  }));
  return (
    <Accordion.Item
      value={accordionName}
      className="focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]"
    >
      <Accordion.Trigger className="w-full text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none">
        <div className="px-6 w-full">
          <div className='flex wrap w-full m-[-12px] items-center'>
            <div className='flex-grow-0 mw-1/3 flex-basis-1/3 p-[12px]'
              style={{
                padding: '12px',
                flexGrow: '0',
                maxWidth: '33.333333%',
                flexBasis: '33.333333%',
              }}
            >
              <h5 className="text-sm text-light-gray-1 text-left font-medium text-dark-gray">
                {title}
              </h5>
            </div>
            {summary && props ? (
              <div
                style={{
                  flexGrow: '0',
                  maxWidth: '66.666667%',
                  flexBasis: '66.666667%',
                  padding: '12px',
                }}
              >
                <h5 className="text-light-gray-2 text-sm text-right text-dark-blue">
                  {summary(
                    props.reduce((acc: any, key: any) => {
                      acc[key] = nodeProps[key];
                      return acc;
                    }, {})
                  )}
                </h5>
              </div>
            ) : null}
          </div>
        </div>
        <RxChevronDown
          className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
      <Accordion.Content className="text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]">
        <div style={{
          "display": "flex",
          "flexWrap": "wrap",
          "width": "calc(100% + 8px)",
        }}>
          {children}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export function FLMultiAccordion({ items }: FLMultiAccordionProps) {
  return (
    <Accordion.Root
      className="bg-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
      type="multiple"
      // collapsible
    >
      {items.map((itemProps, itemInd) => (
        <FLAccordionItem {...itemProps} accordionName={`${2 * itemInd}`} />
      ))}
    </Accordion.Root>
  );
}

export default FLMultiAccordion;
