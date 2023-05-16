import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./user/loginReducer";
import registerReducer from "./user/registerReducer";
import usersReducer from "./user/getUsersReducer";

const store = configureStore({
  reducer: {
    loginReducer: loginReducer,
    registerReducer: registerReducer,
    usersReducer: usersReducer,
  },
});

export default store;
