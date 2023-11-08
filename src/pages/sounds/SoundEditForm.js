import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Badge from "react-bootstrap/Badge";
import Spinner from "react-bootstrap/Spinner";

import appStyles from "../../App.module.css";
import styles from "../../styles/SoundCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory, useParams } from "react-router-dom";
import { axiosRequest } from "../../api/axiosDefaults";

import TagField from "../../components/TagField";
import LocationField from "../../components/LocationField";
import AudioField from "../../components/AudioField";
import ImageField from "../../components/ImageField";
import Asset from "../../components/Asset";

function SoundEditForm(props) {
  const { showMessage } = props;
  const [errors, setErrors] = useState({});
  const [soundData, setSoundData] = useState({
    title: "",
    description: "",
    audio: "",
    image: "",
    location: [],
    tags: [],
  });
  const { title, description, audio, image, location, tags } = soundData;
  const history = useHistory();
  const { id } = useParams();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    const handleMount = async () => {
      if (!hasLoaded) {
        try {
          const { data } = await axiosRequest.get(`/sounds/${id}`);
          setHasLoaded(true);
          const { title, description, audio_file, latitude, longitude, image, tags, is_owner } = data;

          is_owner
            ? setSoundData({
                title: title,
                description: description,
                audio: audio_file,
                location: [latitude, longitude],
                image: image,
                tags: tags,
              })
            : history.push("/");
        } catch (err) {
          // console.log(err);
        }
      }
    };

    handleMount();
  }, [history, id, showMessage, soundData, hasLoaded]);

  // Method for getting audio from AudioField component
  const setAudio = (audio) => {
    setSoundData({
      ...soundData,
      audio: audio,
    });
  };
  // Method for getting image from ImageField component
  const setImage = (image) => {
    setSoundData({
      ...soundData,
      image: image,
    });
  };

  // Method for getting location from LocationField component
  const setLocation = (location) => {
    setSoundData({
      ...soundData,
      location: location,
    });
  };

  // Method for getting tags from TagField component
  const setTags = (tags) => {
    setSoundData({
      ...soundData,
      tags: tags,
    });
  };

  const handleChange = (e) => {
    setSoundData({
      ...soundData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonDisabled(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (typeof audio === "object") {
      formData.append("audio_file", audio);
    }
    if (typeof image === "object") {
      formData.append("image", image);
    }
    formData.append("latitude", location[0]);
    formData.append("longitude", location[1]);

    // Solution for sending array of tags from: https://stackoverflow.com/questions/39247160/javascript-formdata-to-array
    if (tags.length) {
      tags.forEach((tag, index) => {
        formData.append(`tags[${index}]`, tag);
      });
    } else {
      formData.append("tags", []);
    }
    try {
      await axiosRequest.put(`/sounds/${id}`, formData);
      showMessage("success", "Sound successfully updated!");
      setButtonDisabled(false);
      history.push(`/sounds/${id}`);
    } catch (err) {
      setErrors(err.response?.data);
      setButtonDisabled(false);
      showMessage("warning", "Upload failed! Please try again.");
      // console.log(err.response?.data);
    }
  };

  const textFields = (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          className={styles.Input}
          type="text"
          placeholder="Enter a title for your sound"
          name="title"
          value={title}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {errors.title?.map((msg, i) => (
        <Alert className={styles.Alert} variant="warning" key={i}>
          {msg}
        </Alert>
      ))}

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          className={styles.Input}
          as="textarea"
          rows={6}
          placeholder="Enter a description for your sound"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>

      {errors.description?.map((msg, i) => (
        <Alert className={styles.Alert} variant="warning" key={i}>
          {msg}
        </Alert>
      ))}
    </>
  );

  const audioErrors = (
    <>
      {errors.audio_file?.detail?.length ? (
        <Alert className={styles.Alert} variant="warning">
          {errors.audio_file?.detail}
        </Alert>
      ) : (
        errors.audio_file?.map((msg, i) => (
          <Alert className={styles.Alert} variant="warning" key={i}>
            {msg}
          </Alert>
        ))
      )}
    </>
  );

  const imageErrors = (
    <>
      {errors.image?.map((msg, i) => (
        <Alert className={styles.Alert} variant="warning" key={i}>
          {msg}
        </Alert>
      ))}
    </>
  );

  const tagErrors = (
    <>
      {errors.tags && (
        <Alert className={styles.Alert} variant="warning">
          {errors.tags[0]}
        </Alert>
      )}
    </>
  );

  const locationErrors = (
    <>
      {errors.latitude?.map((msg, i) => (
        <Alert className={styles.Alert} variant="warning" key={i}>
          {msg}
        </Alert>
      ))}
      {errors.longitude?.map((msg, i) => (
        <Alert className={styles.Alert} variant="warning" key={i}>
          {msg}
        </Alert>
      ))}
    </>
  );

  return (
    <>
      {hasLoaded ? (
        <Form onSubmit={handleSubmit}>
          <Row>
            <h3 className="mb-4">
              Edit sound
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Popover id="tags-help">
                    <Popover.Header as="h3">Uploading Sound files</Popover.Header>
                    <Popover.Body>
                      <p>
                        Uploaded sound files cannot be longer than <strong>30 seconds</strong>. If the duration of your
                        sound file is longer, it will be trimmed to the first 30 seconds.
                      </p>
                      <p>
                        <strong>
                          ⚠️ Please be sensible about the sounds you upload. Do not upload sounds that are offensive or
                          illegal!
                        </strong>
                      </p>
                    </Popover.Body>
                  </Popover>
                }
              >
                <Badge pill bg="secondary" className="ms-2 fs-6">
                  ?
                </Badge>
              </OverlayTrigger>
            </h3>
            <Col lg={5}>
              <Container>
                <AudioField sendAudio={setAudio} showMessage={showMessage} previousAudio={audio} />
                {audioErrors}
              </Container>
              <hr className="d-lg-none" />
            </Col>
            <Col lg={7}>
              <Container className={`${appStyles.Content}`}>
                {textFields}

                <LocationField
                  sendLocation={setLocation}
                  showMessage={showMessage}
                  previousLocation={location}
                  setButtonDisabled={setButtonDisabled}
                />
                {locationErrors}

                <ImageField sendImage={setImage} showMessage={showMessage} previousImage={image} />
                {imageErrors}

                <TagField sendTags={setTags} showMessage={showMessage} previousTags={tags} />
                {tagErrors}
              </Container>
              <hr />
              <Container className="d-flex justify-content-center">
                <Button className="btn btn-secondary me-2" onClick={history.goBack}>
                  Cancel
                </Button>
                <Button className={`${btnStyles.Button}`} type="submit" disabled={buttonDisabled}>
                  {buttonDisabled ? <Spinner size="sm" /> : "Update Sound"}
                </Button>
              </Container>
            </Col>
          </Row>
        </Form>
      ) : (
        <Asset spinner />
      )}
    </>
  );
}

export default SoundEditForm;
