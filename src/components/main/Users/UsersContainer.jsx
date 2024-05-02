import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectCurrentPage, selectIsFetching, selectPageSize, selectTotalUsersCount, selectUsers,
	setCurrentPage, selectFollowingInProgress, toogleIsFollowingProgress, getUsers, followUser, unfollowUser
} from '../../../redux/usersSlice';
import Users from './Users';
import withoutAuthRedirect from '../../../hoc/withoutAuthRedirect';

const UsersContainer = () => {
	const dispatch = useDispatch();
	const users = useSelector(selectUsers);
	const pageSize = useSelector(selectPageSize);
	const currentPage = useSelector(selectCurrentPage);
	const totalUsersCount = useSelector(selectTotalUsersCount);
	const isFetching = useSelector(selectIsFetching);
	const followingInProgress = useSelector(selectFollowingInProgress);

	useEffect(() => {
		dispatch(getUsers({ currentPage, pageSize }));
	}, [dispatch, pageSize, currentPage]);

	const onPageChanged = (pageNumber) => {
		dispatch(setCurrentPage(pageNumber));
		dispatch(getUsers({ pageNumber, pageSize }));
	};

	const follow = (id) => dispatch(followUser(id));

	const unfollow = (id) => dispatch(unfollowUser(id));

	const toogleIsFollowingProgressFunction = (isFetching, id) =>
		dispatch(toogleIsFollowingProgress({ isFetching, id }));

	return (
		withoutAuthRedirect(
			<Users
				users={users}
				pageSize={pageSize}
				currentPage={currentPage}
				onPageChanged={onPageChanged}
				follow={follow}
				unfollow={unfollow}
				isFetching={isFetching}
				followingInProgress={followingInProgress}
				toogleIsFollowingProgress={toogleIsFollowingProgressFunction}
			/>)
	);
};

export default UsersContainer;