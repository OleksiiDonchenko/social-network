import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

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
            const { isFetching, id } = action.payload;
            isFetching
                ? state.followingInProgress.push(id)
                : state.followingInProgress = state.followingInProgress.filter(userId => userId !== id);
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