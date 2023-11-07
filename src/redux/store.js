import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileSlice";
import usersReducer from "./usersSlice";
import dialogsReducer from "./dialogsSlice";

const store = configureStore({
    reducer: {
        profilePage: profileReducer,
        usersPage: usersReducer,
        dialogsPage: dialogsReducer,
    }
})

window.store = store;

export default store;