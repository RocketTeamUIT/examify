import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import { getExamTakingService } from './services/exam';

const initialState = {
  examId: -1,
  questionList: [],
  duration: 0,
  isFullmode: false,
  countdown: 0,
  countup: 0,
  userChoice: {},
  partList: [],
  data: {},
  isLoading: false,
  error: '',
};

export const getExamTaking = createAsyncThunk('tackle/getExamTaking', async ({ base, id, queryString }, thunkAPI) => {
  try {
    const response = await getExamTakingService(base, id, queryString);
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error?.message);
  }
});

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
    setMode: (state, action) => {
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
  extraReducers: (builder) => {
    builder.addCase(getExamTaking.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = false;
    });

    const pendingList = [getExamTaking.pending];
    const rejectedList = [getExamTaking.rejected];

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

export default tackleSlice.reducer;
export const {
  storeExamTaking,
  storeUserChoice,
  storePartList,
  storeActivateTab,
  setMode,
  setDuration,
  setExamId,
  userSelect,
  toggleFlag,
  setCountdown,
  setCountup,
} = tackleSlice.actions;
