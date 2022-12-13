import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import { getAllCoursesService } from './services/course';

const initialState = {
  courseList: [],
  isLoading: false,
  error: '',
};

export const getAllCourses = createAsyncThunk('course/getAllCourses', async ({ userId }, thunkAPI) => {
  try {
    const response = await getAllCoursesService();
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err?.response?.status);
  }
});

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
    // Get all courses
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      state.isLoading = false;
      state.courseList = action.payload.data;
      state.error = '';
    });

    const pendingList = [getAllCourses.pending];
    const emptyFulfilledList = [getAllCourses.fulfilled];
    const rejectedList = [getAllCourses.rejected];

    builder.addMatcher(isAnyOf(...pendingList), (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addMatcher(isAnyOf(...emptyFulfilledList), (state, action) => {
      state.isLoading = false;
      state.error = '';
      console.log(action.payload);
    });
    builder.addMatcher(isAnyOf(...rejectedList), (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log(action.payload);
    });
  },
});

export default courseSlice.reducer;
