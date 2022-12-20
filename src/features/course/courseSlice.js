import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import { getCourseDetailService } from './services/course';

const initialState = {
  courseDetail: {},
  totalLearnedLessons: 0,
  // This fetchLessons property might be used for future purposes. (When you want not to fetch detail of all lessons even the user has not enrolled yet)
  fetchLessons: false,
  isLoading: false,
  error: '',
};

export const getCourseDetail = createAsyncThunk(
  'course/getCourseDetail',
  async ({ accessToken, courseId, depth }, thunkAPI) => {
    try {
      const response = await getCourseDetailService(accessToken, courseId, depth);
      return response.data.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error?.message);
    }
  },
);

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    pending: (state) => {
      state.isLoading = true;
    },
    finish: (state) => {
      state.isLoading = false;
    },
    markFetchLessons: (state, action) => {
      state.fetchLessons = action.payload;
    },
    updateTotalLearnedLessons: (state, action) => {
      state.totalLearnedLessons = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCourseDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.courseDetail = action.payload;
      state.totalLearnedLessons = 0;
    });

    const pendingList = [getCourseDetail.pending];
    const rejectedList = [getCourseDetail.rejected];

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

export default courseSlice.reducer;
export const { pending, finish, markFetchLessons, updateTotalLearnedLessons } = courseSlice.actions;
