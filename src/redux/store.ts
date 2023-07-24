import { configureStore } from '@reduxjs/toolkit';
import grayscale from './features/grayscaleSlice';

const store = configureStore({
  reducer: {
    grayscale,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
