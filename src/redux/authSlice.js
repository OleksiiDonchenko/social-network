import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserDataId: (state, action) => {
            state.id = action.payload;
        },
        setUserDataLogin: (state, action) => {
            state.login = action.payload;
        },
        setUserDataEmail: (state, action) => {
            state.email = action.payload;
            state.isAuth = true;
        },
        setUserData: (state, action) => {
            const { id, login, email } = action.payload;
            state.id = id;
            state.login = login;
            state.email = email;
            state.isAuth = true;
        },
    }
});

export const { setUserDataId, setUserDataLogin, setUserDataEmail, setUserData } = authSlice.actions;
export const selectAuthData = state => state.auth;
export default authSlice.reducer;