import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalVisible: false,
};

const recordSlice = createSlice({
  name: 'record',
  initialState,
  reducers: {
    toggleModalVisible: (state) => {
      const currentState = state.modalVisible;
      state.modalVisible = !currentState;
    },
  },
});

export default recordSlice.reducer;
export const { toggleModalVisible } = recordSlice.actions;
