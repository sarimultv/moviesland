import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPT: false,
  },
  reducers: {
    showGptSearch: (state) => {
      state.showGPT = !state.showGPT;
    },
  },
});

export const { showGptSearch } = gptSlice.actions;
export default gptSlice;
