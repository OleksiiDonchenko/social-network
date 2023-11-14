import React, { useEffect } from 'react';
import style from './Dialogs.module.css'
import { useSelector } from 'react-redux';
import { selectDialogs } from '../../redux/dialogsSlice';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import ConversationsContainer from './Conversations/ConversationsContainers';
import { selectAuthData } from '../../redux/authSlice';

const Dialogs = () => {
    const dialogs = useSelector(selectDialogs);

    const navigate = useNavigate();
    const isAuth = useSelector(selectAuthData).isAuth;
    useEffect(() => {
        if (!isAuth) {
            return navigate('/login');
        }
    }, [navigate, isAuth]);

    return (
        <div className={style.dialogs}>
            <h1>Dialogs</h1>
            <div className={style.dialogsContainer}>
                <ul className={style.dialogsElements}>
                    {dialogs.map(dialog =>
                        <li className={style.dialogsElContainer} key={dialog.id}>
                            <NavLink to={`/dialogs/${dialog.id}`}
                                className={({ isActive }) => isActive ? style.active : ''}>
                                {dialog.name}
                            </NavLink>
                        </li>)}
                </ul>
                <div>
                    <Routes>
                        {dialogs.map(conversation =>
                            <Route key={conversation.id} path={`${conversation.id}`}
                                element={<ConversationsContainer name={conversation.name} />} />)}
                    </Routes>
                </div>
            </div >
        </div >
    );
};

export default Dialogs;