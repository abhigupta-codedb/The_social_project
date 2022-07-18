import { createSlice } from "@reduxjs/toolkit";

export const UserInfo = createSlice({
  name: "UserInfo",
  initialState: {
    isLoggedIn: "",
    userName: "",
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userName = action.payload.userName;
    },
  },
});

export const { setUserInfo } = UserInfo.actions;

export default UserInfo.reducer;
