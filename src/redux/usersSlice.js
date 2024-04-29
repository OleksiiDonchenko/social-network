import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usersAPI } from "../api/usersAPI";

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

export const getUsers = createAsyncThunk('usersPage/getUsers', async ({ currentPage, pageSize }, { dispatch }) => {
    dispatch(usersSlice.actions.toggleIsFetching(true));
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(usersSlice.actions.toggleIsFetching(false));
    dispatch(usersSlice.actions.setUsers(data.items));
    dispatch(usersSlice.actions.setTotalUsersCount(data.totalCount));
})

export const unfollowUser = createAsyncThunk('usersPage/unfollowUser', async (id, { dispatch }) => {
    dispatch(usersSlice.actions.toogleIsFollowingProgress({ fetching: true, id: id }));
    const data = await usersAPI.unfollow(id);
    if (data.resultCode === 0) {
        dispatch(usersSlice.actions.unfollow(id));
    }
    dispatch(usersSlice.actions.toogleIsFollowingProgress({ fetching: false, id: id }));
})

export const followUser = createAsyncThunk('usersPage/followUser', async (id, { dispatch }) => {
    dispatch(usersSlice.actions.toogleIsFollowingProgress({ fetching: true, id: id }));
    const data = await usersAPI.follow(id);
    if (data.resultCode === 0) {
        dispatch(usersSlice.actions.follow(id));
    }
    dispatch(usersSlice.actions.toogleIsFollowingProgress({ fetching: false, id: id }));
})

export const usersSlice = createSlice({
    name: 'usersPage',
    initialState,
    reducers: {
        follow: (state, action) => {
            state.users = state.users.map(u => u.id === action.payload ? { ...u, followed: true } : u);
        },
        unfollow: (state, action) => {
            state.users = state.users.map(u => u.id === action.payload ? { ...u, followed: false } : u);
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setTotalUsersCount: (state, action) => {
            state.totalUsersCount = action.payload;
        },
        toggleIsFetching: (state, action) => {
            state.isFetching = action.payload;
        },
        toogleIsFollowingProgress: (state, action) => {
            const { fetching, id } = action.payload;
            state.followingInProgress = fetching
                ? [...state.followingInProgress, id]
                : state.followingInProgress.filter(userId => userId !== id);
        }
    }
});

export const { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,
    toogleIsFollowingProgress } = usersSlice.actions;
export const selectUsers = state => state.usersPage.users;
export const selectPageSize = state => state.usersPage.pageSize;
export const selectTotalUsersCount = state => state.usersPage.totalUsersCount;
export const selectCurrentPage = state => state.usersPage.currentPage;
export const selectIsFetching = state => state.usersPage.isFetching;
export const selectFollowingInProgress = state => state.usersPage.followingInProgress;

export default usersSlice.reducer;