import { getAllRecordService } from 'features/exam/services/exam';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  isLoading: false,
  error: '',
};

export const getAllRecordDetail = createAsyncThunk('record/getAllRecord', async ({ axiosPrivate }, thunkAPI) => {
  try {
    const response = await getAllRecordService(axiosPrivate);
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error?.message);
  }
});

const historySlice = createSlice({
  name: 'history',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllRecordDetail.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.isLoading = false;
      state.error = false;
    });
  },
});

export default historySlice.reducer;
