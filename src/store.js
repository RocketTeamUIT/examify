import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './features/auth/authSlice';
import courseReducer from './features/course/courseSlice';
import noteReducer from './features/note/noteSlice';
import ratingReducer from './features/rating/ratingSlice';
import examReducer from './features/exam/examSlice';
import tackleReducer from 'features/exam/tackleSlice';
import recordSlice from 'features/exam/recordSlice';
import historySlice from 'features/exam/historySlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  course: courseReducer,
  note: noteReducer,
  rating: ratingReducer,
  exam: examReducer,
  tackle: tackleReducer,
  record: recordSlice,
  history: historySlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

export default store;
