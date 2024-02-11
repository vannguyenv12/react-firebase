import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./post/post.slice";

export default configureStore({
  reducer: {
    post: postReducer,
  },
});
