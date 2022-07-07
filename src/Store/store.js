import { configureStore } from "@reduxjs/toolkit";
import Group1Reducer from "../Slices/Group1";

export default configureStore({
  reducer: {
    Group1: Group1Reducer,
  },
});
