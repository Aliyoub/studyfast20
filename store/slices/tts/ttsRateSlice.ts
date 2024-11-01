// store/slices/ttsSlice.ts
import { createSlice } from '@reduxjs/toolkit';

export interface TtsState {
  value: number;
}

const initialState: TtsState = {
  value: 2.0,
};

export const ttsRateSlice = createSlice({
  name: 'ttsRate',
  initialState,
  reducers: {
    ttsRate: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { ttsRate } = ttsRateSlice.actions;

export default ttsRateSlice.reducer;
