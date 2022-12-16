import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import { getCourseDetailService } from './services/course';

const initialState = {
  courseDetail: {},
  isLoading: false,
  error: '',
};

export const getCourseDetail = createAsyncThunk(
  'course/getCourseDetail',
  async ({ accessToken, courseId }, thunkAPI) => {
    try {
      const response = await getCourseDetailService(accessToken, courseId);
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
  },
  extraReducers: (builder) => {
    builder.addCase(getCourseDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.courseDetail = action.payload;
    });

    const pendingList = [getCourseDetail.pending];
    const rejectedList = [getCourseDetail.rejected];

    builder.addMatcher(isAnyOf(...pendingList), (state) => {
      state.isLoading = false;
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
