import { createSlice } from "@reduxjs/toolkit";

export const Group1 = createSlice({
  name: "Group1",
  initialState: {
    questions: [],
  },
  reducers: {
    loadQuestions: (state, action) => {
      state.questions = [...state.questions, ...action.payload];
    },
  },
});

export const { loadQuestions } = Group1.actions;

export default Group1.reducer;
