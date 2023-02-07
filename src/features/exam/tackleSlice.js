import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import { getExamTakingService, submitExamService } from './services/exam';

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

export const submitExam = createAsyncThunk(
  'tackle/submitExam',
  async ({ axiosPrivate, navigate }, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const { examId, partList, countup, userChoice } = state.tackle;

      const body = {
        examId,
        partIds: partList.map((partItem) => partItem.id),
        timeFinished: countup,
        listAnswer: userChoice
          .map(({ id, choiceId }) => ({
            questionId: id,
            choiceId,
          }))
          .slice(1) // remove first element
          .filter((item) => item.choiceId !== null),
      };

      console.log(body);

      const { recordId } = (await submitExamService(axiosPrivate, body)).data;
      navigate(`../exams/record-detail/${recordId}`, { replace: true });
    } catch (error) {
      rejectWithValue(error?.message);
    }
  },
);

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
      state.userChoice[action.payload.id].choiceId = action.payload.choiceId;
      state.userChoice[action.payload.id].value = action.payload.value;
    },
    toggleFlag: (state, action) => {
      state.userChoice[action.payload.id].flag = action.payload.flag;
    },
    setCountdown: (state, action) => {
      state.countdown = action.payload;
      if (state.duration !== 0) {
        state.countup = state.countup + 1;
      }
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

    builder.addCase(submitExam.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
    });

    const pendingList = [getExamTaking.pending, submitExam.pending];
    const rejectedList = [getExamTaking.rejected, submitExam.rejected];

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
