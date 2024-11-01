
import { createSlice } from '@reduxjs/toolkit';

export interface selectedItemState {
  items: any; // A adapter
}

const initialState: selectedItemState = {
  items: [], // A adapter
};

// export const selectedItemSlice = createSlice({
//   name: 'selectedItem',
//   initialState,
//   reducers: {
//     selectedItem: (state, action) => {
//       state.value = action.payload;
//     },
//   },
// });



const selectedItemSlice = createSlice({
  name: "selectedItem",
  initialState,

  reducers: {
    selectedItem: (state: any, action) => {
      state.items = action.payload;
    },

    addItem: (state: any, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state: any, action) => {
      return state.items.filter((item: any) => item.id !== action.payload);

    },
  },
});

export const { selectedItem, addItem, deleteItem } = selectedItemSlice.actions;

export default selectedItemSlice.reducer;

