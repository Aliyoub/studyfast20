import { createSlice } from "@reduxjs/toolkit";
import { title } from "process";

export interface ContentState {
  items: any; // A adapter
}

const initialState: ContentState = {
  items: [
    { id: 1, contentTitle: "Le Test", contentDescription: "Ceci est un test" },
  ], // A adapter
};

// export const contentSlice = createSlice({
//   name: 'content',
//   initialState,
//   reducers: {
//     content: (state, action) => {
//       state.items = action.payload;
//     },
//   },
// });

const contentSlice = createSlice({
  name: "content",
  initialState,

  reducers: {
    content: (state: any, action) => {
      state.items = action.payload;
      // state.items = {
      //   id: action.payload.id,
      //   contentTitle: action.payload.contentTitle,
      //   contentDescription: action.payload.contentDescription,
      // };
    },

    addContent: (state: any, action) => {
      // const newContent = {
      // // state.items = [...state.items,{
      //   id: action.payload.id,
      //   contentTitle: action.payload.contentTitle,
      //   contentDescription: action.payload.contentDescription,
      // // }];
      // }
      state.items.push(action.payload);
    },
    deleteContent: (state: any, action) => {
      return state.items.filter((item: any) => item.id !== action.payload);

    },
  },
});

export const { content, addContent, deleteContent } = contentSlice.actions;

export default contentSlice.reducer;
