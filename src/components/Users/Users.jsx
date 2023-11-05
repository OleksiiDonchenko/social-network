import React from 'react';
import style from './Users.module.css'
import { useDispatch } from 'react-redux';
import userPhoto from '../../assets/images/user-icon.png'

const Users = (props) => {
    const dispatch = useDispatch();

    const pagesCount = Math.ceil(props.users.length / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 20; i++) {
        pages = [...pages, i];
    }

    return (
        <div className={style.usersContainer}>
            <h1>Users</h1>
            <div className={style.pagesContainer}>
                <div className={style.pages}>
                    {pages.map(p => {
                        return (
                            <span key={p}
                                className={props.currentPage === p ? style.currentPage : ''}
                                onClick={() => props.onPageChanged(p)}>
                                {p}
                            </span>
                        )
                    })}
                </div>
            </div>
            <div className={style.users}>
                {props.users.map(u => {
                    return (
                        <div key={u.id} className={style.userContainer}>
                            <div className={style.user}>
                                <div className={style.userInfoFirstPart}>
                                    <img src={u.photos.large ? u.photos.large : userPhoto}
                                        alt="user-photo"
                                        className={style.userPhoto} />
                                    <div>
                                        {u.followed
                                            ?
                                            <button className={style.btn} onClick={() => dispatch(props.unfollow(u.id))}>
                                                Unfollow
                                            </button>
                                            :
                                            <button className={style.btn} onClick={() => dispatch(props.follow(u.id))}>
                                                Follow
                                            </button>}
                                    </div>
                                </div>
                                <div className={style.userInfoSecondPart}>
                                    <p>{u.name}</p>
                                    <p>{u.status ? u.status : 'User status: null'}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Users;