import React from 'react';
import style from './MyPosts.module.css'

const MyPosts = ({ newPostText, posts, handlePostTextChange, handleAddPost }) => {
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