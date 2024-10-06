import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPT: false,
    movieNames: [],
    moviesList: [],
  },
  reducers: {
    showGptSearch: (state) => {
      state.showGPT = !state.showGPT;
    },
    addGptResult: (state, action) => {
      const { movieNames, moviesList } = action.payload;
      state.movieNames = movieNames;
      state.moviesList = moviesList;
    },
  },
});

export const { showGptSearch, addGptResult } = gptSlice.actions;
export default gptSlice;
