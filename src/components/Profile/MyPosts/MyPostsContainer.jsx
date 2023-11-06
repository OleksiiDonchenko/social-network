import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, selectNewPostText, selectPosts, updateNewPostText } from '../../../redux/profileSlice';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    const dispatch = useDispatch();
    const newPostText = useSelector(selectNewPostText);
    const posts = useSelector(selectPosts);

    const handleAddPost = () => {
        dispatch(addPost());
    }

    const handlePostTextChange = (e) => {
        dispatch(updateNewPostText(e.target.value));
    }

    return <MyPosts profile={props.profile} newPostText={newPostText} posts={posts} handleAddPost={handleAddPost}
        handlePostTextChange={handlePostTextChange} />
};

export default MyPostsContainer;