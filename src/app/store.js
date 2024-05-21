import { configureStore } from "@reduxjs/toolkit"
import likesCounter from "./Components/Redux/likesCounterSlice"
import userSlice from "./Components/Redux/userSlice";
import userComments from "./Components/Redux/userComments";


export default configureStore({
  reducer: {
    likes: likesCounter,
    subscribers: userSlice,
    userComments: userComments
  }
});