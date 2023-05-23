import styles from './index.module.css';

import * as Accordion from '@radix-ui/react-accordion';
import { FLAccordionItem, FLAccordionItemProps } from '../FLAccordion';

export interface FLMultiAccordionProps {
  items: FLAccordionItemProps[]
}

export function FLMultiAccordion({items}: FLMultiAccordionProps) {
  return (
    <Accordion.Root
      className="bg-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
      type="single"
    >
      {items.map((itemProps, itemInd) => (
        <FLAccordionItem {...itemProps} accordionName={`${itemInd}`} />
      ))}
    </Accordion.Root>
    )
}

export default FLMultiAccordion;
