import { useState } from 'react';
import { useSelector } from 'react-redux';
import PicsumImage from '../../../../components/PicsumImage';
import { selectGrayscale } from '../../../../redux/features/grayscaleSlice';

import styles from './styles.module.scss';

const HomeContent = () => {
  const [list, setList] = useState<number[]>(Array.from({ length: 4 }));

  const grayscale = useSelector(selectGrayscale);

  return (
    <div className={styles.content}>
      {list.map((i) => (
        <PicsumImage
          key={i}
          photoId={i}
          width={400}
          height={275}
          grayscale={grayscale}
        />
      ))}
    </div>
  );
};
export default HomeContent;
