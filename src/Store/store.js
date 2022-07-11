import { configureStore } from "@reduxjs/toolkit";
import Group1Reducer from "../Slices/Group1";
import { loadState } from "../browser-storage";

export default configureStore({
  reducer: {
    Group1: Group1Reducer,
  },
  preloadedState: loadState(),
});
