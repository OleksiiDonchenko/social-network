import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authAPI } from "../components/api/authAPI";

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: true,
}

export const isAuthUser = createAsyncThunk('auth/isAuth', async (_, { dispatch }) => {
    const data = await authAPI.authMe();
    if (data.resultCode !== 0) {
        dispatch(authSlice.actions.setIsAuth());
    }
})

export const authMe = createAsyncThunk('auth/authenticate', async (_, { dispatch }) => {
    const data = await authAPI.authMe();
    try {
        if (data.resultCode === 0) {
            const { id, login, email } = data.data;
            dispatch(authSlice.actions.setUserData({ id, login, email }));
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
})

export const authLogin = createAsyncThunk('auth/LogIn', async ({ email, password, rememberMe },
    { dispatch }) => {
    const data = await authAPI.authLogin(email, password, rememberMe);
    if (data.resultCode === 0) {
        let { userId } = data.data;
        dispatch(authSlice.actions.setLoginUserId(userId));
    }
})

export const authLogout = createAsyncThunk('auth/Logout', async (_, { dispatch }) => {
    const data = await authAPI.authLogout();
    if (data.resultCode === 0) {
        dispatch(authSlice.actions.userLogOut());
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth: (state) => {
            state.isAuth = false;
        },
        setUserData: (state, action) => {
            const { id, login, email } = action.payload;
            state.userId = id;
            state.login = login;
            state.email = email;
        },
        setLoginUserId: (state, action) => {
            state.userId = action.payload;
            state.isAuth = true;
        },
        userLogOut: (state) => {
            state.userId = null;
            state.login = null;
            state.email = null;
            state.isAuth = false;
        }
    }
});

export const { } = authSlice.actions;
export const selectAuthData = state => state.auth;

export default authSlice.reducer;