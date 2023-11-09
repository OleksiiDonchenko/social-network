import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectCurrentPage, selectIsFetching, selectPageSize, selectTotalUsersCount, selectUsers,
	follow, unfollow, toggleIsFetching, setTotalUsersCount,
	setUsers, setCurrentPage, selectFollowingInProgress, toogleIsFollowingProgress
} from '../../redux/usersSlice';
import Users from './Users';
import { usersAPI } from '../api/usersAPI';

const UsersContainer = () => {
	const dispatch = useDispatch();
	const users = useSelector(selectUsers);
	const pageSize = useSelector(selectPageSize);
	const currentPage = useSelector(selectCurrentPage);
	const totalUsersCount = useSelector(selectTotalUsersCount);
	const isFetching = useSelector(selectIsFetching);
	const followingInProgress = useSelector(selectFollowingInProgress);

	useEffect(() => {
		dispatch(toggleIsFetching(true));
		usersAPI.getUsers(currentPage, pageSize)
			.then((data) => {
				dispatch(toggleIsFetching(false));
				dispatch(setUsers(data.items));
				dispatch(setTotalUsersCount(data.totalCount));
			});
	}, [dispatch, pageSize, currentPage]);

	const onPageChanged = (pageNumber) => {
		dispatch(setCurrentPage(pageNumber));
		dispatch(toggleIsFetching(true));
		usersAPI.getUsers(pageNumber, pageSize)
			.then((data) => {
				dispatch(toggleIsFetching(false));
				dispatch(setUsers(data.items));
			});
	};

	const followUser = (id) => dispatch(follow(id));

	const unfollowUser = (id) => dispatch(unfollow(id));

	const toogleIsFollowingProgressFunction = (isFetching, id) =>
		dispatch(toogleIsFollowingProgress({ isFetching, id }));

	return (
		<Users
			users={users}
			pageSize={pageSize}
			currentPage={currentPage}
			onPageChanged={onPageChanged}
			follow={followUser}
			unfollow={unfollowUser}
			isFetching={isFetching}
			followingInProgress={followingInProgress}
			toogleIsFollowingProgress={toogleIsFollowingProgressFunction}
		/>
	);
};

export default UsersContainer;