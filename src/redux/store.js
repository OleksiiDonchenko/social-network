import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileSlice";
import usersReducer from "./usersSlice";

const store = configureStore({
    reducer: {
        profilePage: profileReducer,
        usersPage: usersReducer,
    }
})

window.store = store;

export default store;