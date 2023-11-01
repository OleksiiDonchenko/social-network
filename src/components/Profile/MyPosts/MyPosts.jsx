import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea />
                </div>
                <div className={style.buttons}>
                    <button>Add post</button>
                    <button>Remove post</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};

export default MyPosts;