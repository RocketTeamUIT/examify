import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  examId: -1,
  questionList: [],
  duration: 0,
  isFullmode: false,
  countdown: 0,
  countup: 0,
  userChoice: {},
  partList: [],
};

const tackleSlice = createSlice({
  name: 'tackle',
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
      state.isFullmode = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setExamId: (state, action) => {
      state.examId = action.payload;
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
  setDuration,
  setExamId,
  userSelect,
  toggleFlag,
  setCountdown,
  setCountup,
} = tackleSlice.actions;
