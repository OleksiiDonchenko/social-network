import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { headerAPI } from "../components/api/headerAPI";

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

export const auth = createAsyncThunk('auth/authenticate', async (_, { dispatch }) => {
    const data = await headerAPI.authMe();
    try {
        if (data.resultCode === 0) {
            const { id, login, email } = data.data;
            dispatch(authSlice.actions.setUserData({ id, login, email }));
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            const { id, login, email } = action.payload;
            state.id = id;
            state.login = login;
            state.email = email;
            state.isAuth = true;
        },
    }
});

export const { setUserData } = authSlice.actions;
export const selectAuthData = state => state.auth;

export default authSlice.reducer;