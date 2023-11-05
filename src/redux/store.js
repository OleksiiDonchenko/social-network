import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileSlice";
import usersReducer from "./usersSlice";

const store = configureStore({
    reducer: {
        profile: profileReducer,
        users: usersReducer,
    }
})

window.store = store;

export default store;