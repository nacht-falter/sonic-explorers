import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosResponse } from "../../api/axiosDefaults";

import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import ConfirmationModal from "../../components/ConfirmationModal";
import CommentEditForm from "./CommentEditForm";

import appStyles from "../../App.module.css";

const Comment = (props) => {
  const {
    is_owner: isOwner,
    profile_id: profileId,
    owner,
    content,
    updated_at: updatedAt,
    profile_avatar: profileAvatar,
    id,
    setSound,
    setComments,
  } = props;
  const [showModal, setShowModal] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleDelete = async () => {
    try {
      await axiosResponse.delete(`/comments/${id}`);
      setSound((prevSound) => ({
        results: [
          {
            ...prevSound.results[0],
            comments_count: prevSound.results[0].comments_count - 1,
          },
        ],
      }));
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

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
        {!showEditForm ? (
          <p className="mb-0" data-testid="comment"><small>{content}</small></p>
        ) : (
          <CommentEditForm
            id={id}
            content={content}
            profileId={profileId}
            setShowEditForm={setShowEditForm}
            setComments={setComments}
          />
        )}
      </div>
      {isOwner && (
        <MoreDropdown handleEdit={setShowEditForm} handleShowModal={handleShowModal} item={"comment"} isOwner={isOwner} />
      )}
      <ConfirmationModal
        show={showModal}
        setShow={setShowModal}
        handleMethod={handleDelete}
        title="Delete Comment?"
        body="Do you want to delete this comment?"
        type="danger"
      />
    </div>
  );
};

export default Comment;
