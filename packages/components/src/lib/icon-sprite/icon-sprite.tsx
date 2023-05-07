import styles from './icon-sprite.module.css';

/* eslint-disable-next-line */
export interface IconSpriteProps {}

export function IconSprite(props: IconSpriteProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to IconSprite!</h1>
    </div>
  );
}

export default IconSprite;
