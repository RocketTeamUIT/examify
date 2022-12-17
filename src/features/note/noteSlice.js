import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllNotesInLessonService } from './services/note';

const initialState = {
  notes: [],
  isLoading: false,
  error: '',
};

export const getNotesInLesson = createAsyncThunk('note/getNotesInLesson', async ({ axios, lessonId }, thunkAPI) => {
  try {
    const response = await getAllNotesInLessonService({ axios, lessonId });
    return response.data.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNotesInLesson.fulfilled, (state, action) => {
      state.notes = action.payload;
      state.isLoading = false;
      state.error = '';
    });

    const pendingList = [getNotesInLesson.pending];
    const rejectedList = [getNotesInLesson.rejected];

    builder.addMatcher(isAnyOf(...pendingList), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isAnyOf(...rejectedList), (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default noteSlice.reducer;
export const { addNote } = noteSlice.actions;
