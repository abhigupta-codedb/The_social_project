import { configureStore } from "@reduxjs/toolkit";
import Group1Reducer from "../Slices/Group1";
import { loadState } from "../browser-storage";
import UserInfo from "../Slices/UserInfo";

export default configureStore({
  reducer: {
    Group1: Group1Reducer,
    UserInfo: UserInfo,
  },
  preloadedState: loadState(),
});
