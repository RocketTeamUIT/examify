import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalVisible: false,
  curQuestionId: 0,
  questionList: [],
  headerData: {},
};

const recordSlice = createSlice({
  name: 'record',
  initialState,
  reducers: {
    storeQuestionList: (state, action) => {
      state.questionList = action.payload;
    },
    storeHeaderData: (state, action) => {
      state.headerData = action.payload;
    },
    toggleModalVisible: (state) => {
      const currentState = state.modalVisible;
      state.modalVisible = !currentState;
    },
    setCurId: (state, action) => {
      state.curQuestionId = action.payload;
    },
  },
});

export default recordSlice.reducer;
export const { toggleModalVisible, storeQuestionList, storeHeaderData, setCurId } = recordSlice.actions;
