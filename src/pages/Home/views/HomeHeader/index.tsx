import { FC } from 'react';
import Button from '../../../../components/UI/Button';
import ToggleSwitch from '../../../../components/UI/ToggleSwitch';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import {
  selectGrayscale,
  toggleGrayscale,
} from '../../../../redux/features/grayscaleSlice';

import styles from './styles.module.scss';

const HomeHeader: FC = () => {
  const grayscale = useAppSelector(selectGrayscale);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.homeHeader}>
      <div className={styles.left}>
        <ToggleSwitch
          value={grayscale}
          onChange={() => dispatch(toggleGrayscale())}
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
