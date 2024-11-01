// store/slices/ttsSlice.ts
import { createSlice } from '@reduxjs/toolkit';

export interface TtsState {
  value: number;
}

const initialState: TtsState = {
  value: 0.5,
};

export const ttsVolumeSlice = createSlice({
  name: 'ttsVolume',
  initialState,
  reducers: {
    ttsVolume: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { ttsVolume } = ttsVolumeSlice.actions;

export default ttsVolumeSlice.reducer;
