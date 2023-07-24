// Define a type for the slice state
import { createSlice } from '@reduxjs/toolkit';
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
      state.value.push(
        ...Array.from({ length: 4 }, (_, index) => state.value.length + index)
      );
    },
  },
});

export const { incrementPhotoList } = photolistSlice.actions;

export const selectPhotolist = (state: RootState) => state.photolist.value;

export default photolistSlice.reducer;
