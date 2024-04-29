import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { profileAPI } from "../api/profileAPI";

const initialState = {
    posts: [
        { id: 1, message: "Hello! What's up??", likes: 12, },
        { id: 2, message: 'Yo!', likes: 15, },
        { id: 3, message: 'Good day!', likes: 10, },
        { id: 4, message: "Basketball, it's wonderful game!", likes: 25, },
        { id: 5, message: "Every day, it's your chance!", likes: 38, },
    ],
    profile: null,
    status: '',
};

export const getUserProfile = createAsyncThunk('profilePage/getUserProfile',
    async (userId, { dispatch }) => {
        const data = await profileAPI.getUserProfile(userId);
        dispatch(profileSlice.actions.setUserProfile(data));
    })

export const getUserStatus = createAsyncThunk('profilePage/getUserStatus',
    async (userId, { dispatch }) => {
        const data = await profileAPI.getUserStatus(userId);
        dispatch(profileSlice.actions.setUserStatus(data));
    })

export const updateUserStatus = createAsyncThunk('profilePage/updateUserStatus',
    async (status, { dispatch }) => {
        const data = await profileAPI.updateUserStatus(status);
        if (data.resultCode === 0) {
            dispatch(profileSlice.actions.setUserStatus(data));
        }
    })

export const profileSlice = createSlice({
    name: 'profilePage',
    initialState,
    reducers: {
        addPost: (state, action) => {
            const newPost = {
                id: state.posts.length + 1,
                message: action.payload,
                likes: 0
            }
            state.posts.push(newPost);
        },
        setUserProfile: (state, action) => {
            state.profile = action.payload;
        },
        setUserStatus: (state, action) => {
            state.status = action.payload;
        }
    }
})

export const { addPost, setUserProfile, setUserStatus } = profileSlice.actions;
export const selectPosts = state => state.profilePage.posts;
export const selectUserProfile = state => state.profilePage.profile;
export const selectUserStatus = state => state.profilePage.status;

export default profileSlice.reducer;