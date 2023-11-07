import React from 'react';
import style from './Header.module.css'
import iconReact from '../../assets/images/React-icon.png'
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    return (
        <header className={style.header}>
            <a href="">
                <img className={style.icon} src={iconReact} alt="react-icon" />
            </a>
            <div className={style.loginBlock}>
                {props.isAuth ? <p>{props.login}</p> : <NavLink to={'/login'}>Log in</NavLink>}
            </div>
        </header>
    );
};

export default Header;