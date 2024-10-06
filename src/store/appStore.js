import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import videosSlice from "./videosList";
import gptSlice from "./gptSlice";
import languageSlice from "./languageSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice.reducer,
    videos: videosSlice.reducer,
    gpt: gptSlice.reducer,
    language: languageSlice.reducer,
  },
});

export default appStore;
