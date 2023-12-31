import type { FC } from 'react';
import styles from './styles.module.scss';

const PicsumSkeleton: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}></p>
        <p className={styles.subtitle}></p>
      </div>
    </div>
  );
};
export default PicsumSkeleton;
