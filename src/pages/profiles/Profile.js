import React from "react";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import Button from "react-bootstrap/Button";
import { useSetProfileData } from "../../contexts/ProfileDataContext";

const Profile = (props) => {
  const { profile, mobile, imageSize = 45 } = props;
  const { id, follow_id, avatar, owner, display_name: displayName, is_owner: isOwner } = profile;

  const currentUser = useCurrentUser();

  const { handleFollow, handleUnfollow } = useSetProfileData();

  return (
    <div className={`mt-3 d-flex align-items-center ${mobile && "flex-column"}`}>
      <div>
        <Link className="align-self-center" to={`/profiles/${id}`}>
          <Avatar src={avatar} height={imageSize} />
        </Link>
      </div>
      <Link to={`/profiles/${id}`} className="ms-1 text-break">
        {displayName ? displayName : owner}
      </Link>
      <div className={`text-right ${!mobile && "ms-auto"}`}>
        {!mobile &&
          currentUser &&
          !isOwner &&
          (follow_id ? (
            <Button
              className={`${btnStyles.YellowButton} ${btnStyles.Small} ${btnStyles.Narrow}`}
              onClick={() => {
                handleUnfollow(profile);
              }}
            >
              Unfollow
            </Button>
          ) : (
            <Button
              className={`${btnStyles.YellowButton} ${btnStyles.Small} ${btnStyles.Narrow}`}
              onClick={() => {
                handleFollow(profile);
              }}
            >
              Follow
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Profile;
