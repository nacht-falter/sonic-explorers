import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../components/Avatar";

import appStyles from "../../App.module.css";

const Comment = (props) => {
  const {
    profile_id: profileId,
    owner,
    content,
    updated_at: updatedAt,
    profile_avatar: profileAvatar,
  } = props;

  return (
    <div className="border-bottom d-flex mb-3 pb-3">
      <div className="flex-shrink-0 pt-1 ps-2">
        <Link to={`/profile/${profileId}`}>
          <Avatar src={profileAvatar} height={40} />
        </Link>
      </div>
      <div className="flex-grow-1 ms-2">
        <Link to={`/profile/${profileId}`}>
          <span className={`${appStyles.SmallText}`}>{owner}</span>
        </Link>
        <span className={`${appStyles.SmallText} text-muted ms-2`}>{updatedAt}</span>
        <p className="mb-0">{content}</p>
      </div>
    </div>
  );
};

export default Comment;
