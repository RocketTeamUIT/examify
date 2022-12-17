import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import courseReducer from './features/course/courseSlice';
import noteReducer from './features/note/noteSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
    note: noteReducer,
  },
});

export default store;
