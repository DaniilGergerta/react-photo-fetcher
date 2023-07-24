import { useSelector } from 'react-redux';
import PicsumImage from '../../../../components/PicsumImage';
import Button from '../../../../components/UI/Button';
import { useAppDispatch } from '../../../../hooks/redux';
import { selectGrayscale } from '../../../../redux/features/grayscaleSlice';
import {
  incrementPhotoList,
  selectPhotolist,
} from '../../../../redux/features/photolistSlice';

import styles from './styles.module.scss';

const HomeContent = () => {
  const photolist = useSelector(selectPhotolist);
  const dispatch = useAppDispatch();

  const grayscale = useSelector(selectGrayscale);

  return (
    <div className={styles.content}>
      <div className={styles.grid}>
        {photolist.map((i) => (
          <PicsumImage key={i} photoId={i} width={400} grayscale={grayscale} />
        ))}
      </div>
      <Button
        label={'More Photos'}
        onClick={() => dispatch(incrementPhotoList())}
      />
    </div>
  );
};
export default HomeContent;
