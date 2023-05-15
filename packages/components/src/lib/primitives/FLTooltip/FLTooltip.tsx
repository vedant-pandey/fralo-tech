import styles from './FLTooltip.module.css';

/* eslint-disable-next-line */
export interface FLTooltipProps {}

export function FLTooltip(props: FLTooltipProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FLTooltip!</h1>
    </div>
  );
}

export default FLTooltip;
