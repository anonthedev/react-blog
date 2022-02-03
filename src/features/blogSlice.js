import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: "",
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload.blogs;
    },
  },
});

export const { setBlogs } = blogSlice.actions;

export const selectBlog = (state) => state.blog.blogs;

export default blogSlice.reducer;
