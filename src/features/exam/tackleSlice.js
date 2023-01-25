import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questionList: [],
  mode: 'countdown',
  countdown: 0,
  countup: 0,
  duration: 7200,
  userChoice: {},
  partList: [],
};

const tackleSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    storeExamTaking: (state, action) => {
      state.questionList = action.payload;
    },
    storeUserChoice: (state, action) => {
      state.userChoice = action.payload;
    },
    storePartList: (state, action) => {
      state.partList = action.payload;
    },
    storeMode: (state, action) => {
      state.mode = action.payload;
    },
    userSelect: (state, action) => {
      state.userChoice[action.payload.id].value = action.payload.value;
    },
    toggleFlag: (state, action) => {
      state.userChoice[action.payload.id].flag = action.payload.flag;
    },
    setCountdown: (state, action) => {
      state.countdown = action.payload;
    },
    setCountup: (state, action) => {
      state.countup = action.payload;
    },
  },
});

export default tackleSlice.reducer;
export const {
  storeExamTaking,
  storeUserChoice,
  storePartList,
  storeActivateTab,
  storeMode,
  userSelect,
  toggleFlag,
  setCountdown,
  setCountup,
} = tackleSlice.actions;
