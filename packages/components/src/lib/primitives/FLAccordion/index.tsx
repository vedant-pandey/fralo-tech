import styles from './index.module.css';

/* eslint-disable-next-line */
export interface FLAccordionProps {}

export function FLAccordion(props: FLAccordionProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FLAccordion!</h1>
    </div>
  );
}

export default FLAccordion;
