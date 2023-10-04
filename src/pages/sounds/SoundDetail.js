import React from "react";

import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Avatar from "../../components/Avatar";
import AudioPlayer from "../../components/AudioPlayer";

import styles from "../../styles/SoundDetail.module.css";
import appStyles from "../../App.module.css";
import { axiosResponse } from "../../api/axiosDefaults";
import SoundImage from "../../components/SoundImage";

const SoundDetail = (props) => {
  const {
    id,
    owner,
    title,
    description,
    audio_file,
    tags,
    image,
    latitude,
    longitude,
    profile_id,
    profile_avatar,
    created_at,
    updated_at,
    like_id,
    likes_count,
    comments_count,
    soundPage,
    setSounds,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleLikeUnlike = async (isLike) => {
    const responseData = {};
    try {
      if (isLike) {
        const { data } = await axiosResponse.post("/likes/", { sound: id });
        responseData.like_id = data.id;
        responseData.likes_count = likes_count + 1;
      } else {
        await axiosResponse.delete(`/likes/${like_id}`);
        responseData.like_id = null;
        responseData.likes_count = likes_count - 1;
      }

      setSounds((prevSounds) => ({
        ...prevSounds,
        results: prevSounds.results.map((sound) => {
          return sound.id === id
            ? { ...sound, likes_count: responseData.likes_count, like_id: responseData.like_id }
            : sound;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="mb-3">
      <Card bg="light" className={styles.Sound}>
        <Card.Header className="d-flex justify-content-between align-items-center">
            <Link to={`/sounds/${id}`}>
          <SoundImage src={image} height={75} text={title} />
            </Link>
          <div className={appStyles.SmallText}>
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_avatar} height={30} text={owner} />
            </Link>
            <div className="mt-2">{created_at}</div>
          </div>
        </Card.Header>
        <Card.Body className="pt-2">
          <Card.Title></Card.Title>
          <ListGroup horizontal="md" className={`${appStyles.SmallText} mb-2`}>
            {description && (
              <ListGroup.Item>
                <div className="fw-bold">Description</div>
                {description}
              </ListGroup.Item>
            )}
            <ListGroup.Item>
              <div className="fw-bold">Location</div>
              {latitude}, {longitude}
            </ListGroup.Item>
            {tags?.length > 0 && (
              <ListGroup.Item>
                <div className="fw-bold">Tags</div>
                <div className="d-flex align-items-center mt-2">
                  {tags?.map((tag, index) => (
                    <span className={styles.Tag} key={index}>
                      {tag}
                    </span>
                  ))}
                </div>
              </ListGroup.Item>
            )}
          </ListGroup>
          <AudioPlayer audioUrl={audio_file} />
        </Card.Body>
        <Card.Footer className={`${styles.Footer} ${appStyles.SmallText} d-flex justify-content-between align-items-center`}>
          <div>Last updated: {updated_at}</div>
          <div>
            <span className="me-2">
              {is_owner ? (
                <OverlayTrigger placement="top" overlay={<Tooltip>You can't like your own sound!</Tooltip>}>
                  <i className="far fa-heart" />
                </OverlayTrigger>
              ) : like_id ? (
                <span onClick={() => handleLikeUnlike(false)}>
                  <i className={`fas fa-heart ${styles.HeartLiked}`} />
                </span>
              ) : currentUser ? (
                <span onClick={handleLikeUnlike}>
                  <i className={`far fa-heart ${styles.HeartNotLiked}`} />
                </span>
              ) : (
                <OverlayTrigger placement="top" overlay={<Tooltip>Log in to like sounds!</Tooltip>}>
                  <i className="far fa-heart" />
                </OverlayTrigger>
              )}
              {likes_count}
            </span>
            <span>
              <i className="far fa-comments" />
              {comments_count}
            </span>
          </div>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default SoundDetail;
