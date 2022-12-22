import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rating: 0,
  initialRating: 0,
  isEdit: false,
  loading: false,
};

const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    setPending: (state, action) => {
      state.loading = action.payload;
    },
    setRating: (state, action) => {
      const { rating, initialRating, isEdit } = action.payload;
      state.rating = rating;
      if (isEdit !== undefined) state.isEdit = isEdit;
      if (initialRating !== undefined) state.initialRating = initialRating;
    },
  },
});

export default ratingSlice.reducer;
export const { setPending, setRating } = ratingSlice.actions;
