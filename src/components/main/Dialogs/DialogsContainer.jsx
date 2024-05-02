import React from 'react';
import Dialogs from './Dialogs';
import { useSelector } from 'react-redux';
import { selectDialogs } from '../../../redux/dialogsSlice';
import withoutAuthRedirect from '../../../hoc/withoutAuthRedirect';

const DialogsContainer = () => {
  const dialogs = useSelector(selectDialogs);
  return (
    withoutAuthRedirect(
      <Dialogs dialogs={dialogs} />
    ));
};

export default DialogsContainer;