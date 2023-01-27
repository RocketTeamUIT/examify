import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import { getExamDetailService } from './services/exam';

const initialState = {
  detail: {},
  isLoading: false,
  error: '',
  tackle: {},
  duration: 7200,
  countdown: 1000,
  userChoice: {},
  partList: [],
  another: {},
};

export const getExamDetail = createAsyncThunk('exam/getExamDetail', async ({ axios, id }, thunkAPI) => {
  try {
    const response = await getExamDetailService(axios, id);
    return response.data.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error?.message);
  }
});

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
  extraReducers: (builder) => {
    builder.addCase(getExamDetail.fulfilled, (state, action) => {
      state.detail = action.payload;
      state.isLoading = false;
      state.error = false;
    });

    const pendingList = [getExamDetail.pending];
    const rejectedList = [getExamDetail.rejected];

    builder.addMatcher(isAnyOf(...pendingList), (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addMatcher(isAnyOf(...rejectedList), (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log(action.payload);
    });
  },
});

export default examSlice.reducer;
export const { storeExamTaking, storeUserChoice, storePartList, storeActivateTab, userSelect, toggleFlag } =
  examSlice.actions;
