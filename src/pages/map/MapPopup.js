import React from "react";

import { Link } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Avatar from "../../components/Avatar";
import AudioPlayer from "../../components/AudioPlayer";

import soundDetailStyles from "../../styles/SoundDetail.module.css";
import SoundImage from "../../components/SoundImage";

const MapPopup = (props) => {
  const {
    id,
    owner,
    title,
    audio_file,
    image,
    profile_id,
    profile_avatar,
    created_at,
    like_id,
    likes_count,
    comments_count,
    is_owner: isOwner,
  } = props;

  const currentUser = useCurrentUser();

  return (
    <>
      <Link
        to={`/sounds/${id}`}
        title="Go to sound page"
        className="mb-3 text-dark d-flex justify-content-start align-items-center"
      >
        <SoundImage src={image} height={50} />
        <span className="fs-6">
          {title}{" "}
          <small>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </small>
        </span>
      </Link>

      <AudioPlayer audioUrl={audio_file} height={25} />

      <div className="mt-2 d-flex justify-content-end">
        <span className="me-2">
          {isOwner ? (
            <i className="far fa-heart" />
          ) : like_id ? (
            <i className={`fas fa-heart ${soundDetailStyles.HeartLiked}`} />
          ) : currentUser ? (
            <i className={`far fa-heart ${soundDetailStyles.HeartNotLiked}`} />
          ) : (
            <i className="far fa-heart" />
          )}
          <span className="ms-1">{likes_count}</span>
        </span>
        <span>
          <i className="far fa-comments" />
          <span className="ms-1">{comments_count}</span>
        </span>
      </div>

      <div className="d-flex align-items-center justify-content-between border-top border-bottom px-2 py-2 my-2">
        <span>{created_at}</span>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_avatar} height={30} text={owner} />
        </Link>
      </div>
    </>
  );
};

export default MapPopup;
