import { createSlice } from '@reduxjs/toolkit';

const cameraSlice = createSlice({
  name: 'cameras',
  initialState: {
    camerasDetails : null,
    isFetching: false,
    isError: false,
  },
  reducers: {
    Start: (state) => ({ ...state, isFetching: true }),
    isFetchedData: (state, action) => ({
      ...state,
      isFetching: false,
      camerasDetails: action.payload,
    }),
    Failure: (state, action) => ({
      ...state,
      isFetching: false,
      isError: true,
      message: action.payload,
    }),
  },
});

export const { Start, isFetchedData, Failure } = cameraSlice.actions;
export default cameraSlice.reducer;
