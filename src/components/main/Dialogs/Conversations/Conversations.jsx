import React from 'react';
import style from './Conversations.module.css'
import { Field, Form, Formik } from 'formik';

const NewMessageForm = ({ handleAddMessage }) => {
    return (
        <Formik
            initialValues={{ newMessageText: '' }}
            onSubmit={(values, actions) => {
                handleAddMessage(values.newMessageText);
                actions.resetForm();
                actions.setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className={style.textareaBtnBlock}>
                        <Field className={style.textarea} type="text" as="textarea" name="newMessageText" placeholder="New message..." cols={50} rows={4} />
                        <button className={style.btn} type="submit" typeof="submit" disabled={isSubmitting}>Add message</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

const Conversations = ({ messagesInterlocutor, messagesUser, handleAddMessage }) => {

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
            <NewMessageForm handleAddMessage={handleAddMessage} />
        </div>
    )
}

export default Conversations;