// store/slices/ttsSlice.ts
import { createSlice } from '@reduxjs/toolkit';

export interface TtsState {
  value: number;
}

const initialState: TtsState = {
  value: 1.0,
};

export const ttsPitchSlice = createSlice({
  name: 'ttsPitch',
  initialState,
  reducers: {
    ttsPitch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { ttsPitch } = ttsPitchSlice.actions;

export default ttsPitchSlice.reducer;
