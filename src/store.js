import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import courseReducer from './features/course/courseSlice';
import noteReducer from './features/note/noteSlice';
import ratingReducer from './features/rating/ratingSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
    note: noteReducer,
    rating: ratingReducer,
  },
});

export default store;
