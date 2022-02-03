import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import blogReducer from "./features/blogSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        blog: blogReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
})