import React from "react";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { Button } from "react-bootstrap";

const Profile = (props) => {
  const { profile, mobile, imageSize = 45 } = props;
  const { id, following_id, avatar, owner, is_owner: isOwner } = profile;

  const currentUser = useCurrentUser();

  return (
    <div className={`mt-3 d-flex align-items-center ${mobile && "flex-column"}`}>
      <div>
        <Link className="align-self-center" to={`/profiles/${id}`}>
          <Avatar src={avatar} height={imageSize} />
        </Link>
      </div>
      <Link to={`/profiles/${id}`} className="ms-1 text-break">
        {owner}
      </Link>
      <div className={`text-right ${!mobile && "ms-auto"}`}>
        {!mobile &&
          currentUser &&
          !isOwner &&
          (following_id ? (
            <Button className={`${btnStyles.YellowButton} ${btnStyles.Small}`} onClick={() => {}}>
              Unfollow
            </Button>
          ) : (
            <Button className={`${btnStyles.YellowButton} ${btnStyles.Small} ${btnStyles.Narrow}`} onClick={() => {}}>
              Follow
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Profile;
