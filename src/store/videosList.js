import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    mostPopular: null,
  },
  reducers: {
    addMostPopularVideos: (state, action) => {
      state.mostPopular = action.payload;
    },
  },
});

export const { addMostPopularVideos } = videosSlice.actions;

export default videosSlice;
