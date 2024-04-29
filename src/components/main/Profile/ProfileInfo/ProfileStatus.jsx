import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserStatus, setUserStatus, updateUserStatus } from '../../../../redux/profileSlice';

const ProfileStatus = (props) => {
  const statusGlobalState = useSelector(selectUserStatus);

  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(statusGlobalState);

  const changeStatus = (e) => {
    setStatus(e.currentTarget.value);
  }

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    dispatch(setUserStatus(status));
    dispatch(updateUserStatus(status));
  }

  useEffect(() => {
    setStatus(statusGlobalState)
  }, [statusGlobalState]);

  return (
    <div>
      {!editMode &&
        <div>
          <span onDoubleClick={activateEditMode}>
            {status || '-----'}
          </span>
        </div>
      }
      {editMode &&
        <div>
          <input autoFocus={true}
            onBlur={deactivateEditMode}
            onChange={changeStatus}
            type="text"
            value={status || ''} />
        </div>
      }
    </div>
  );
};

export default ProfileStatus;