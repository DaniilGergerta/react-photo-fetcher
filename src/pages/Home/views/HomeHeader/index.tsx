import { FC, useState } from 'react';
import Button from '../../../../components/UI/Button';
import ToggleSwitch from '../../../../components/UI/ToggleSwitch';

import styles from './styles.module.scss';

const HomeHeader: FC = () => {
  const [grayscale, setGrayscale] = useState<boolean>(false);

  return (
    <div className={styles.homeHeader}>
      <div className={styles.left}>
        <ToggleSwitch
          value={grayscale}
          onChange={() => setGrayscale((prev) => !prev)}
        />
        <span>Make photos grayscale</span>
      </div>
      <div className={styles.right}>
        <Button
          label={'Fetch new Posts'}
          onClick={() => {
            return;
          }}
        />
      </div>
    </div>
  );
};
export default HomeHeader;
