import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import { getRecord } from './services/exam';

const initialState = {
  modalVisible: false,
  curQuestionId: 0,
  questionList: [],
  headerData: {},
  data: {},
  isLoading: false,
  error: '',
};

export const getRecordDetail = createAsyncThunk('record/getRecord', async ({ axiosPrivate, id }, thunkAPI) => {
  try {
    const response = await getRecord(axiosPrivate, id);
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error?.message);
  }
});

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
  extraReducers: (builder) => {
    builder.addCase(getRecordDetail.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = false;
    });

    const pendingList = [getRecordDetail.pending];
    const rejectedList = [getRecordDetail.rejected];

    builder.addMatcher(isAnyOf(...pendingList), (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addMatcher(isAnyOf(...rejectedList), (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default recordSlice.reducer;
export const { toggleModalVisible, storeQuestionList, storeHeaderData, setCurId } = recordSlice.actions;
