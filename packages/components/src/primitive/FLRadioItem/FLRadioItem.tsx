import styles from './FLRadioItem.module.css';

/* eslint-disable-next-line */
export interface FLRadioItemProps {}

export function FLRadioItem(props: FLRadioItemProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FLRadioItem!</h1>
    </div>
  );
}

export default FLRadioItem;
