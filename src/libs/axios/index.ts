import axios from 'axios';
import type { AxiosError, AxiosResponse } from 'axios';
import type { IAxiosError, IStockError, PicsumInfo } from '../../types/dto';

export const picsumInstance = axios.create({
  baseURL: 'https://picsum.photos/',
});

export const axiosErrorHandler = <T>(
  callback: (err: IAxiosError<T> | IStockError<T>) => void
) => {
  return (error: Error | AxiosError<T>) => {
    if (axios.isAxiosError(error)) {
      callback({
        error: error,
        type: 'axios-error',
      });
    } else {
      callback({
        error: error,
        type: 'stock-error',
      });
    }
  };
};
