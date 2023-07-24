import classNames from 'classnames';
import { ComponentProps, FC, useEffect, useState } from 'react';
import { getImageInfo, getRandomImage } from '../../libs/axios';
import { PicsumInfo } from '../../types/dto';

import styles from './styles.module.scss';

type ImageState = PicsumInfo & { src: string };

interface Props {
  photoId: number;
  grayscale: boolean;
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
  const [img, setImg] = useState<ImageState>();

  useEffect(() => {
    const controller = new AbortController();

    const asyncEffect = async () => {
      const imgResponse = await getRandomImage(
        width,
        height,
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
    return <></>;
  }

  return (
    <div className={styles.container}>
      <img
        {...rest}
        className={classNames(styles.image, {
          [styles.grayscale]: grayscale,
        })}
        src={img.src}
        width={width}
        height={height}
        alt={'Random image from Picsum'}
        loading={'lazy'}
      />
      <a href={img.url}>
        <div className={styles.header}>
          <p className={styles.title}>{img.author}</p>
          <p className={styles.subtitle}>{img.url}</p>
          <span></span>
        </div>
      </a>
    </div>
  );
};
export default PicsumImage;
