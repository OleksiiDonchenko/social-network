import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, selectPosts, } from '../../../../redux/profileSlice';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);

    const handleAddPost = (newPostText) => {
        dispatch(addPost(newPostText));
    }

    return <MyPosts profile={props.profile}
        posts={posts} handleAddPost={handleAddPost} />
};

export default MyPostsContainer;