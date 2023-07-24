// Define a type for the slice state
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface GrayscaleState {
  value: boolean;
}

const initialState: GrayscaleState = {
  value: false,
};

export const grayscaleSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    enableGrayscale: (state) => {
      state.value = true;
    },
    disableGrayscale: (state) => {
      state.value = false;
    },
    toggleGrayscale: (state) => {
      state.value = !state.value;
    },
  },
});

export const { enableGrayscale, disableGrayscale, toggleGrayscale } =
  grayscaleSlice.actions;

export const selectGrayscale = (state: RootState) => state.grayscale.value;

export default grayscaleSlice.reducer;
