import React from 'react';
import style from './Conversations.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {
    addMessage, selectConversations, selectNewMessageText, updateNameTarget
} from '../../../../redux/dialogsSlice';
import Conversations from './Conversations';

const ConversationsContainer = (props) => {
    const dispatch = useDispatch();
    const conversations = useSelector(selectConversations);
    const newMessageText = useSelector(selectNewMessageText);

    let conversation = `conversation${props.name}`;
    let messages = `messages${props.name}`;

    const handleAddMessage = (newMessageText) => {
        dispatch(updateNameTarget(props.name));
        dispatch(addMessage(newMessageText));
    }

    const messagesInterlocutor = conversations[conversation][messages].map(m =>
        <div key={m.id} className={style.messageContainer}>
            <div className={style.companionPhoto}>
                <div>{props.name}</div>
            </div>
            {m.message}
        </div>)

    const messagesUser = conversations[conversation].messagesUserProfile.map(m =>
        <div key={m.id} className={style.messageContainer}>
            <div className={style.myselfPhoto}>
                <div>It's me</div>
            </div>
            <div className={style.messageText}>
                {m.message}
            </div>
        </div>)

    return <Conversations messagesInterlocutor={messagesInterlocutor} messagesUser={messagesUser}
        newMessageText={newMessageText} handleAddMessage={handleAddMessage} />
}

export default ConversationsContainer;