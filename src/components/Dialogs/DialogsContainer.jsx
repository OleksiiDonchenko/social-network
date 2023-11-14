import React from 'react';
import Dialogs from './Dialogs';
import { useSelector } from 'react-redux';
import { selectDialogs } from '../../redux/dialogsSlice';
import withAuthRedirect from '../hoc/withAuthRedirect';

const DialogsContainer = () => {
  const dialogs = useSelector(selectDialogs);
  return (
    withAuthRedirect(
      <Dialogs dialogs={dialogs} />
    ));
};

export default DialogsContainer;