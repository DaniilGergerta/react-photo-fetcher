import type { AxiosError } from 'axios';

export interface PicsumInfo {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export type ImageState = PicsumInfo & { src: string };

export interface IErrorBase<T> {
  error: Error | AxiosError<T>;
  type: 'axios-error' | 'stock-error';
  name?: string;
}

export interface IAxiosError<T> extends IErrorBase<T> {
  error: AxiosError<T>;
  type: 'axios-error';
}

export interface IStockError<T> extends IErrorBase<T> {
  error: Error;
  type: 'stock-error';
}
