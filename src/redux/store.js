import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileSlice";
import usersReducer from "./usersSlice";
import dialogsReducer from "./dialogsSlice";
import authReducer from "./authSlice";

const store = configureStore({
	reducer: {
		profilePage: profileReducer,
		usersPage: usersReducer,
		dialogsPage: dialogsReducer,
		auth: authReducer,
	},
	devTools: true,
})

window.store = store;

export default store;