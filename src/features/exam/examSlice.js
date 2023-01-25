import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tackle: {},
  duration: 7200,
  countdown: 1000,
  userChoice: {},
  partList: [],
  another: {},
};

const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    storeExamTaking: (state, action) => {
      state.tackle = action.payload;
    },
    storeUserChoice: (state, action) => {
      state.userChoice = action.payload;
    },
    storePartList: (state, action) => {
      state.partList = action.payload;
    },
    storeActivateTab: (state, action) => {
      state.another.activateTab = action.payload;
    },
    userSelect: (state, action) => {
      state.userChoice[action.payload.id].value = action.payload.value;
    },
    toggleFlag: (state, action) => {
      state.userChoice[action.payload.id].flag = action.payload.flag;
    },
  },
});

export default examSlice.reducer;
export const { storeExamTaking, storeUserChoice, storePartList, storeActivateTab, userSelect, toggleFlag } =
  examSlice.actions;
