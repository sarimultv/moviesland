import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import videosSlice from "./videosList";
import geminiSlice from "./geminiSlice";
import languageSlice from "./languageSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice.reducer,
    videos: videosSlice.reducer,
    gemini: geminiSlice.reducer,
    language: languageSlice.reducer,
  },
});

export default appStore;
