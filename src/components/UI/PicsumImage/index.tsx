import classNames from 'classnames';
import { ComponentProps, FC } from 'react';
import { PICSUM_BASEURL } from '../../../common/constants';

import styles from './styles.module.scss';

interface Props {
  photoId: number;
  grayscale?: boolean;
  width: number;
  height: number;
}

const PicsumImage: FC<ComponentProps<'img'> & Props> = ({
  photoId,
  width,
  height,
  grayscale,
  ...rest
}) => {
  return (
    <img
      {...rest}
      className={classNames(styles.image, { [styles.grayscale]: grayscale })}
      src={`${PICSUM_BASEURL}/${width}/${height}.webp?random=${photoId}}`}
      width={width}
      height={height}
      alt={'Random image from Picsum'}
      loading={'lazy'}
    />
  );
};
export default PicsumImage;
