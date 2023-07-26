import { picsumInstance, axiosErrorHandler } from '../axios';
import type { AxiosResponse } from 'axios';
import type { PicsumInfo } from '../../types/dto';

export const getRandomImage = async (
  width: number,
  height: number,
  signal?: AbortSignal
): Promise<AxiosResponse<Blob> | undefined> => {
  try {
    return await picsumInstance.get<Blob>(`${width}/${height}`, {
      responseType: 'blob',
      signal,
    });
  } catch (e) {
    axiosErrorHandler<Blob>((e) => {
      if (e.name != 'CanceledError') {
        console.error('getRandomImage()', e);
      }
    });
  }
};

export const getImageInfo = async (
  id: string,
  signal?: AbortSignal
): Promise<AxiosResponse<PicsumInfo> | undefined> => {
  try {
    return await picsumInstance.get<PicsumInfo>(`id/${id}/info`, { signal });
  } catch (e) {
    axiosErrorHandler<PicsumInfo>((e) => {
      if (e.name != 'CanceledError') {
        console.error('getRandomImage()', e);
      }
    });
  }
};
