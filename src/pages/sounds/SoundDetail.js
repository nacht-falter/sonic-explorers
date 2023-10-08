import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

import { Link, useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Avatar from "../../components/Avatar";
import AudioPlayer from "../../components/AudioPlayer";

import styles from "../../styles/SoundDetail.module.css";
import appStyles from "../../App.module.css";
import { axiosResponse } from "../../api/axiosDefaults";
import SoundImage from "../../components/SoundImage";
import SoundDetailMap from "../../components/SoundDetailMap";
import { MoreDropdown } from "../../components/MoreDropdown";
import ConfirmationModal from "../../components/ConfirmationModal";

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
  const isOwner = currentUser?.username === owner;
  const history = useHistory();
  const [rerenderMap, setRerenderMap] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  const handleShowDetails = () => {
    setRerenderMap(rerenderMap ? false : true);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleEdit = () => {
    history.push(`/sounds/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosResponse.delete(`/sounds/${id}`);
      soundPage && history.goBack();
      setShowModal(false);
      setSounds((prevSounds) => ({
        ...prevSounds,
        results: prevSounds.results.filter((sound) => sound.id !== id),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const soundDetails = (
    <Row className="mt-2">
      <Col md={7} className="pe-md-0">
        <ListGroup className={`${appStyles.SmallText} mb-1 me-0`}>
          <ListGroup.Item className="flex-fill">
            <div className="fw-bold">Description</div>
            {description ? description : <div className="text-muted">No description</div>}
          </ListGroup.Item>
          {tags?.length > 0 && (
            <ListGroup.Item className="flex-fill">
              <div className="fw-bold">Tags</div>
              <div className="d-flex align-items-center mt-1">
                {tags?.map((tag, index) => (
                  <span className={styles.Tag} key={index}>
                    {tag}
                  </span>
                ))}
              </div>
            </ListGroup.Item>
          )}
        </ListGroup>
      </Col>
      <Col md={5} className="pb-2 pt-1 pt-md-0">
        <SoundDetailMap sound={{ id: id, location: [latitude, longitude] }} rerender={rerenderMap} />
      </Col>
    </Row>
  );

  return (
    <Container className={soundPage ? "mb-2" : "mb-4"}>
      {soundPage && (
        <Button onClick={history.goBack} variant="light" size="sm" className={`${appStyles.SmallText} mb-2`}>
          <i className="fa-solid fa-caret-left"></i> Go back
        </Button>
      )}

      <Card bg="light" className={appStyles.ComponentContainer}>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <Link to={`/sounds/${id}`}>
            <SoundImage src={image} height={75} text={title} />
          </Link>
          <div className={appStyles.SmallText}>
            <span className="d-flex align-items-center justify-content-between">
              <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_avatar} height={30} text={owner} />
              </Link>
              <MoreDropdown
                handleEdit={handleEdit}
                handleShowModal={handleShowModal}
                isOwner={isOwner}
                item={"sound"}
              />
            </span>
            <div className="mt-2">{created_at}</div>
          </div>
        </Card.Header>

        <Card.Body className="pt-2 pb-0">
          <AudioPlayer audioUrl={audio_file} />
          {soundPage ? (
            soundDetails
          ) : (
            <Accordion className="my-2">
              <Accordion.Item eventKey="0">
                <Accordion.Header as="span" onClick={handleShowDetails} className={`${styles.AccordionHeader} p-0`}>
                  Show Details
                </Accordion.Header>
                <Accordion.Body className="p-2">
                  {soundDetails}
                  <Link to={`/sounds/${id}`}>
                    <Button variant="outline-light" size="sm" className={`${appStyles.SmallText} text-dark`}>
                      Go to sound detail page <i className="fa-solid fa-arrow-up-right-from-square text-secondary"></i>
                    </Button>
                  </Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          )}
        </Card.Body>

        <Card.Footer
          className={`${styles.Footer} ${appStyles.SmallText} d-flex justify-content-between align-items-center`}
        >
          <div>Last updated: {updated_at}</div>
          <div>
            <span className="me-2">
              {isOwner ? (
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
      <ConfirmationModal
        show={showModal}
        setShow={setShowModal}
        handleMethod={handleDelete}
        title="Delete Sound?"
        body="Do you really want to delete this sound?"
        type="danger"
      />
    </Container>
  );
};

export default SoundDetail;
