import classNames from 'classnames';
import { ComponentProps, FC, useEffect, useState } from 'react';
import { getImageInfo, getRandomImage } from '../../libs/axios';
import { PicsumInfo } from '../../types/dto';
import PicsumSkeleton from './Skeleton';

import styles from './styles.module.scss';

type ImageState = PicsumInfo & { src: string };

interface Props {
  photoId: number;
  grayscale: boolean;
  width: number;
}

const PicsumImage: FC<ComponentProps<'img'> & Props> = ({
  photoId,
  width,
  grayscale,
  ...rest
}) => {
  const [img, setImg] = useState<ImageState>();

  useEffect(() => {
    const controller = new AbortController();

    const asyncEffect = async () => {
      const imgResponse = await getRandomImage(
        width,
        Math.floor((width / 3) * 2),
        controller.signal
      );
      if (!imgResponse) return;

      const infoResponse = await getImageInfo(
        imgResponse.headers['picsum-id'],
        controller.signal
      );
      if (!infoResponse) return;

      setImg({
        ...infoResponse.data,
        src: URL.createObjectURL(imgResponse.data),
      });
    };
    void asyncEffect();

    return () => {
      controller.abort();
    };
  }, []);

  if (!img) {
    return <PicsumSkeleton />;
  }

  return (
    <div className={styles.container}>
      <a href={img.url} target="_blank" rel="noreferrer">
        <img
          {...rest}
          className={classNames(styles.image, {
            [styles.grayscale]: grayscale,
          })}
          src={img.src}
          width={width}
          alt={'Random image from Picsum'}
          loading={'lazy'}
        />
        <div className={styles.header}>
          <p className={styles.title}>{img.author}</p>
          <p className={styles.subtitle}>{img.url}</p>
        </div>
        <div className={styles.miniModal}>
          <span>See full image</span>
        </div>
      </a>
    </div>
  );
};
export default PicsumImage;
