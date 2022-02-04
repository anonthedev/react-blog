import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import blogReducer from "./features/blogSlice";
import libraryReducer from "./features/librarySlice"

export default configureStore({
    reducer: {
        user: userReducer,
        blog: blogReducer,
        library: libraryReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
})