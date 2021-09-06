import React from "react";

const UserResume = ({ resume, handleEdit }) => {
  return (
    <div className="skin_box">
      <img src={resume?.data?.logo} alt={resume?.data?.skin} />
      <div className="btn_container">
        <div onClick={() => handleEdit(resume)} className="action_btn">
          Edit
        </div>
      </div>
    </div>
  );
};

export default UserResume;
