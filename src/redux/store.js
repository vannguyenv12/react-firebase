import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./post/post.slice";
import userReducer from "./user/user.slice";

export default configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
  },
});
