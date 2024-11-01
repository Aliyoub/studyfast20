
import { createSlice } from '@reduxjs/toolkit';

export interface ggListVoicesState {
  ggListVoices: []; 
}

const initialState: ggListVoicesState = {
  ggListVoices: [],
};


export const ggListVoicesSlice = createSlice({
  name: 'ggListVoices',
  initialState,
  reducers: {
    ggListVoices: (state, action) => {
      state.ggListVoices = action.payload;
    },
  },
});

export const { ggListVoices } = ggListVoicesSlice.actions;

export default ggListVoicesSlice.reducer;

