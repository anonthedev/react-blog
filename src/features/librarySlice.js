import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  library: "",
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    setLibrary: (state, action) => {
      state.library = action.payload.library;
    },
  },
});

export const { setLibrary } = librarySlice.actions;

export const selectLibrary = (state) => state.library.library;

export default librarySlice.reducer;
