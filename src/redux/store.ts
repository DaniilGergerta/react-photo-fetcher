import { configureStore } from '@reduxjs/toolkit';
import grayscale from './features/grayscaleSlice';
import photolist from './features/photolistSlice';

export const store = configureStore({
  reducer: {
    grayscale,
    photolist,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
