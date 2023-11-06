import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [
        { id: 1, message: "Hello! What's up??", likes: 12, },
        { id: 2, message: 'Yo!', likes: 15, },
        { id: 3, message: 'Good day!', likes: 10, },
        { id: 4, message: "Basketball, it's wonderful game!", likes: 25, },
        { id: 5, message: "Every day, it's your chance!", likes: 38, },
    ],
    newPostText: 'New post text...',
    profile: null,
};

export const profileSlice = createSlice({
    name: 'profilePage',
    initialState,
    reducers: {
        addPost: (state) => {
            const newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likes: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
        },
        updateNewPostText: (state, action) => {
            state.newPostText = action.payload;
        },
        setUserProfile: (state, action) => {
            state.profile = action.payload;
        }
    }
})

export const { addPost, updateNewPostText, setUserProfile } = profileSlice.actions;
export const selectPosts = state => state.profilePage.posts;
export const selectNewPostText = state => state.profilePage.newPostText;
export const selectUserProfile = state => state.profilePage.profile;

export default profileSlice.reducer;