import React from 'react';
import style from './MyPosts.module.css'
import Preloader from '../../../common/Preloader';
import profilePhoto from '../../../../assets/images/user-icon.png'
import { Field, Form, Formik } from 'formik';

const NewPostForm = ({ handleAddPost }) => {
    return (
        <Formik
            initialValues={{ newPostText: '' }}
            onSubmit={(values, actions) => {
                handleAddPost(values.newPostText);
                actions.resetForm();
                actions.setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className={style.textareaBtnBlock}>
                        <Field type="text" as="textarea" name="newPostText" placeholder="New message text..." />
                        <button className={style.btn} type="submit" typeof="submit" disabled={isSubmitting}>
                            Add post
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

const MyPosts = ({ posts, handleAddPost, profile }) => {

    return (
        <div>
            <h3>My posts</h3>
            <NewPostForm handleAddPost={handleAddPost} />
            <div className={style.posts}>
                {posts.map(post => (
                    <div className={style.post} key={post.id}>
                        <div className={style.photoUserProfileContainer}>
                            {profile === null ? < Preloader /> :
                                <img className={style.photoUserProfile}
                                    src={profile.photos.large ? profile.photos.large : profilePhoto}
                                    alt="photo-user-profile" />}
                        </div>
                        <div className={style.postMessage}>
                            <span>{post.message}</span>
                        </div>
                        <div className={style.postLikes}>
                            <span>
                                <span className={style.heartSymbol}>❤️</span> {post.likes} likes
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyPosts;