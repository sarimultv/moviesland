import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import videosSlice from "./videosList";

const appStore = configureStore({
  reducer: {
    user: userSlice.reducer,
    videos: videosSlice.reducer,
  },
});

export default appStore;
