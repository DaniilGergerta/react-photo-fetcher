import { FC, PropsWithChildren } from 'react';
import Navbar from '../../components/Navbar';

import styles from './styles.module.scss';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={styles.mainLayout}>
      <Navbar />
      {children}
    </main>
  );
};
export default MainLayout;
