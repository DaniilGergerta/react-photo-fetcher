import axios, { AxiosResponse } from 'axios';
import { PicsumInfo } from '../../types/dto';

export const picsumInstance = axios.create({
  baseURL: 'https://picsum.photos/',
});

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
  } catch (e: any) {
    if (e.name != 'CanceledError') {
      console.error('getRandomImage()', e);
    }
    return undefined;
  }
};

export const getImageInfo = async (
  id: string,
  signal?: AbortSignal
): Promise<AxiosResponse<PicsumInfo> | undefined> => {
  try {
    return await picsumInstance.get<PicsumInfo>(`id/${id}/info`, { signal });
  } catch (e: any) {
    if (e.name != 'CanceledError') {
      console.error('getRandomImage()', e);
    }
    return undefined;
  }
};
