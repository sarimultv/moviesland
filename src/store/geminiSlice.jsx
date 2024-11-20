import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
  name: "gemini",
  initialState: {
    showGemini: false,
    movieNames: [],
    moviesList: [],
  },
  reducers: {
    showGeminiSearch: (state) => {
      state.showGemini = !state.showGemini;
    },
    addGeminiResult: (state, action) => {
      const { movieNames, moviesList } = action.payload;
      state.movieNames = movieNames;
      state.moviesList = moviesList;
    },
  },
});

export const { showGeminiSearch, addGeminiResult } = geminiSlice.actions;
export default geminiSlice;
