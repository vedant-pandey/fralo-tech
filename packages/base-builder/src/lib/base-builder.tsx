import styles from './base-builder.module.css';

/* eslint-disable-next-line */
export interface BaseBuilderProps {}

export function BaseBuilder(props: BaseBuilderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BaseBuilder!</h1>
    </div>
  );
}

export default BaseBuilder;
