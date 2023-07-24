import { useIntersection } from '@mantine/hooks';
import classNames from 'classnames';
import { FC } from 'react';
import Button from '../../../../components/UI/Button';
import ToggleSwitch from '../../../../components/UI/ToggleSwitch';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import {
  selectGrayscale,
  toggleGrayscale,
} from '../../../../redux/features/grayscaleSlice';
import { resetPhotoList } from '../../../../redux/features/photolistSlice';

import styles from './styles.module.scss';

const HomeHeader: FC = () => {
  const grayscale = useAppSelector(selectGrayscale);
  const dispatch = useAppDispatch();

  const { ref, entry } = useIntersection({
    threshold: 1,
    rootMargin: '-16px',
  });

  return (
    <div className={styles.homeHeader} ref={ref}>
      <div
        className={classNames(styles.left, {
          [styles.sticky]: !entry?.isIntersecting,
        })}
      >
        <ToggleSwitch
          value={grayscale}
          onChange={() => dispatch(toggleGrayscale())}
        />
        <span>Make photos grayscale</span>
      </div>
      <div className={styles.right}>
        <Button
          className={styles.btn}
          label={'Fetch new Posts'}
          onClick={() => dispatch(resetPhotoList())}
        />
      </div>
    </div>
  );
};
export default HomeHeader;
