import { FC } from 'react';

import styles from './styles.module.scss';

const Navbar: FC = () => {
  return (
    <nav className={styles.navbar}>
      <header>Photo Fetcher</header>
    </nav>
  );
};
export default Navbar;
