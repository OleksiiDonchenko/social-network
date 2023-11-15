import React, { useState } from 'react';

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const changeStatus = (e) => {
    setStatus(e.target.value)
  }

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
  }

  return (
    <div>
      {!editMode &&
        <div onDoubleClick={activateEditMode}>
          <span>{status}</span>
        </div>
      }
      {editMode &&
        <div onBlur={deactivateEditMode}>
          <input autoFocus={true} onChange={changeStatus} type="text" value={status} />
        </div>
      }
    </div>
  );
};

export default ProfileStatus;