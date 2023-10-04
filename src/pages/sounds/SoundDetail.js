import React from "react";

import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Avatar from "../../components/Avatar";
import AudioPlayer from "../../components/AudioPlayer";

import styles from "../../styles/SoundDetail.module.css";
import appStyles from "../../App.module.css";

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
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Container>
      <Card bg="light" className={styles.Sound}>
        <Card.Header className="d-flex justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_avatar} height={55} />
            {owner}
          </Link>
          <span className="d-flex align-items-center">
            <ListGroup className={appStyles.SmallText}>
              <ListGroup.Item>Created: {created_at}</ListGroup.Item>
            </ListGroup>
          </span>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Container className="mb-2">
            <Row>
              <Col sm={4} className="p-0 pb-2 pb-sm-0 pe-sm-2">
                <Card.Img src={image} alt={title} className={styles.SoundImage} />
              </Col>
              <Col sm={8} className="p-0">
                <ListGroup className={appStyles.SmallText}>
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
                </ListGroup>
              </Col>
            </Row>
          </Container>
          <AudioPlayer audioUrl={audio_file} />
          {tags?.length > 0 && (
            <ListGroup className={`${appStyles.SmallText} mt-2`}>
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
            </ListGroup>
          )} 
        </Card.Body>
        <Card.Footer className={`${styles.Footer} d-flex justify-content-end align-items-center`}>
          {is_owner ? (
            <OverlayTrigger placement="top" overlay={<Tooltip>You can't like your own sound!</Tooltip>}>
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={() => {}}>
              <i className={`fas fa-heart ${styles.HeartLiked}`} />
            </span>
          ) : currentUser ? (
            <span onClick={() => {}}>
              <i className={`far fa-heart ${styles.HeartNotLiked}`} />
            </span>
          ) : (
            <OverlayTrigger placement="top" overlay={<Tooltip>Log in to like sounds!</Tooltip>}>
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count}
          <span>
            <i className="far fa-comments" />
          </span>
          {comments_count}
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default SoundDetail;
