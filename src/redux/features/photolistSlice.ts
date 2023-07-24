// Define a type for the slice state
import { createSlice } from '@reduxjs/toolkit';
import { pushNewIds } from '../../utils/pushNewIds';
import { RootState } from '../store';

interface PhotoListState {
  value: number[];
}

const initialState: PhotoListState = {
  value: Array.from({ length: 4 }, (_, index) => index),
};

export const photolistSlice = createSlice({
  name: 'photolistSlice',
  initialState,
  reducers: {
    incrementPhotoList: (state) => {
      pushNewIds(state.value);
    },
    resetPhotoList: (state) => {
      pushNewIds(state.value);
      state.value = state.value.slice(-4);
    },
  },
});

export const { incrementPhotoList, resetPhotoList } = photolistSlice.actions;

export const selectPhotolist = (state: RootState) => state.photolist.value;

export default photolistSlice.reducer;
