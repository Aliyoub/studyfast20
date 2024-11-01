
import { createSlice } from '@reduxjs/toolkit';

export interface controlStateState {
  value: string; // A adapter
}

const initialState: controlStateState = {
  value: "", // A adapter
};

export const controlStateSlice = createSlice({
  name: 'controlState',
  initialState,
  reducers: {
    controlState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { controlState } = controlStateSlice.actions;

export default controlStateSlice.reducer;

