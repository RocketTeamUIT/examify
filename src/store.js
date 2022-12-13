import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import courseReducer from './features/course/courseSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
  },
});

export default store;
