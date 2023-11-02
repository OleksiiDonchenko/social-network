import React from 'react';
import style from './MyPosts.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addPost, selectNewPostText, selectPosts, updateNewPostText } from '../../../redux/profileSlice';

const MyPosts = () => {
    const dispatch = useDispatch();
    const newPostText = useSelector(selectNewPostText);
    const posts = useSelector(selectPosts);

    const handleAddPost = () => {
        dispatch(addPost());
    }

    const handlePostTextChange = (e) => {
        dispatch(updateNewPostText(e.target.value));
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div className={style.textareaBtnBlock}>
                    <textarea value={newPostText} onChange={handlePostTextChange} />
                    <button className={style.btn} onClick={handleAddPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {posts.map(post => <div className={style.post} key={post.id}>
                    {post.message}
                    <div>
                        <span className={style.heartSymbol}>❤️</span> {post.likes} likes
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default MyPosts;