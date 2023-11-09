import React from 'react';
import style from './Users.module.css'
import userPhoto from '../../assets/images/user-icon.png'
import Preloader from '../common/Preloader'
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../api/usersAPI';

const Users = (props) => {
  // const pagesCount = Math.ceil(props.users.length / props.pageSize);
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
      {props.isFetching ? <Preloader /> :
        <div className={style.users}>
          {props.users.map(u => {
            return (
              <div key={u.id} className={style.userContainer}>
                <div className={style.user}>
                  <div className={style.userInfoFirstPart}>
                    <NavLink to={'/profile/' + u.id}>
                      <img src={u.photos.large ? u.photos.large : userPhoto}
                        alt="user-photo"
                        className={style.userPhoto} />
                    </NavLink>
                    <div className={style.btnContainer}>
                      {u.followed
                        ?
                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                          className={style.btn}
                          onClick={() => {

                            props.toogleIsFollowingProgress(true, u.id)
                            usersAPI.unfollow(u.id)
                              .then((data) => {
                                if (data.resultCode === 0) {
                                  props.unfollow(u.id)
                                }
                                props.toogleIsFollowingProgress(false, u.id)
                              });

                          }}>Unfollow
                        </button>
                        :
                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                          className={style.btn}
                          onClick={() => {

                            props.toogleIsFollowingProgress(true, u.id)
                            usersAPI.follow(u.id)
                              .then((data) => {
                                if (data.resultCode === 0) {
                                  props.follow(u.id)
                                }
                                props.toogleIsFollowingProgress(false, u.id)
                              });

                          }}>Follow
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
        </div>}
    </div>
  );
};

export default Users;