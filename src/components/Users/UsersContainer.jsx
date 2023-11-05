import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectCurrentPage, selectIsFetching, selectPageSize, selectTotalUsersCount, selectUsers,
    follow, unfollow, toggleIsFetching, setTotalUsersCount,
    setUsers, setCurrentPage
} from '../../redux/usersSlice';
import axios from 'axios';
import Users from './Users';

const UsersContainer = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const pageSize = useSelector(selectPageSize);
    const currentPage = useSelector(selectCurrentPage);
    const totalUsersCount = useSelector(selectTotalUsersCount);
    const isFetching = useSelector(selectIsFetching);

    useEffect(() => {
        dispatch(toggleIsFetching(true));
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(response.data.items));
                dispatch(setTotalUsersCount(response.data.totalCount));
            });
    }, [dispatch, pageSize, currentPage]);

    const onPageChanged = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(toggleIsFetching(true));
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then((response) => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(response.data.items));
            });
    };

    return (
        <Users
            users={users}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            follow={follow}
            unfollow={unfollow}
            isFetching={isFetching}
        />
    );
};

export default UsersContainer;