import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPT: false,
    gptResult: null,
  },
  reducers: {
    showGptSearch: (state) => {
      state.showGPT = !state.showGPT;
    },
    addGptResult: (state, action) => {
      state.gptResult = action.payload;
    },
  },
});

export const { showGptSearch, addGptResult } = gptSlice.actions;
export default gptSlice;
