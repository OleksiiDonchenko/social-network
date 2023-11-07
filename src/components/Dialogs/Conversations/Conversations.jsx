import React from 'react';
import style from './Conversations.module.css'

const Conversations = ({ messagesInterlocutor, messagesUser, newMessageText,
    handleUpdateNewMessageText, handleAddMessage }) => {

    return (
        <div className={style.conversations}>
            <h1>Conversation</h1>
            <div className={style.conversation}>
                <div>
                    {messagesInterlocutor}
                </div>
                <div>
                    {messagesUser}
                </div>
            </div>
            <div className={style.textareaBtnBlock}>
                <textarea value={newMessageText} onChange={handleUpdateNewMessageText}
                    placeholder='New message...' cols={50} rows={4} />
                <button className={style.btn} onClick={handleAddMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Conversations;