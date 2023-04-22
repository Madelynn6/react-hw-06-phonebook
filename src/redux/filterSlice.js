import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  input: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setInputFilter(state, action) {
      state.input = action.payload;
    },
  },
});

export const { setInputFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
