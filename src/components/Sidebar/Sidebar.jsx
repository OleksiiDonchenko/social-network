import React from 'react';
import style from './Sidebar.module.css'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <h1>Sidebar</h1>
            <nav>
                <ul className={style.nav}>
                    <li className={style.itemNavLink}><NavLink to='/'>News</NavLink></li>
                    <li className={style.itemNavLink}><NavLink to='/profile'>Profile</NavLink></li>
                    <li className={style.itemNavLink}><NavLink to='/dialogs'>Messages</NavLink></li>
                    <li className={style.itemNavLink}><NavLink to='/music'>Music</NavLink></li>
                    <li className={style.itemNavLink}><NavLink to='/settings'>Settings</NavLink></li>
                    <li className={style.itemNavLink}><NavLink to='/users'>Find users</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;