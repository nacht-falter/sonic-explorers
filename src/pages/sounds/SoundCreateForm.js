import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Badge from "react-bootstrap/Badge";

import appStyles from "../../App.module.css";
import styles from "../../styles/SoundCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router-dom";
import { axiosRequest } from "../../api/axiosDefaults";
import TagField from "../../components/TagField";
import LocationField from "../../components/LocationField";
import AudioField from "../../components/AudioField";

function SoundCreateForm(props) {
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
  const imageInput = useRef(null);
  const history = useHistory();

  // Method for getting audio from AudioField component
  const setAudio = (audio) => {
    setSoundData({
      ...soundData,
      audio: audio,
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

  const handleChangeImage = (e) => {
    if (e.target.files.length) {
      URL.revokeObjectURL(image);
      setSoundData({
        ...soundData,
        image: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(formData);
    formData.append("title", title);
    formData.append("description", description);
    if (audio) {
      formData.append("audio_file", audio);
    }
    if (imageInput.current.files.length) {
      formData.append("image", imageInput.current.files[0]);
    }
    formData.append("latitude", location[0]);
    formData.append("longitude", location[1]);
    formData.append("tags", tags);
    console.log(formData);
    try {
      showMessage("info", "Uploading sound... Please wait.");
      const { data } = await axiosRequest.post("/sounds/", formData);
      showMessage("success", "Sound successfully uploaded!");
      history.push(`/sounds/${data.id}`);
    } catch (err) {
      setErrors(err.response?.data);
      showMessage("warning", "Upload failed! Please try again.");
      console.log(err.response?.data);
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

  const imageField = (
    <Form.Group className="mb-3">
      <Form.Label htmlFor="image-upload">
        Image
        <OverlayTrigger
          placement="top"
          overlay={
            <Popover id="tags-help">
              <Popover.Header as="h3">Sound images</Popover.Header>
              <Popover.Body>
                <p>If you can, take a picture of the situation in which you recorded the sound and upload it here.</p>
                <p>If you don't provide an image, a random image based on the tags you entered will be used.</p>
                <p>You can also upload the image later by editing your sound if you prefer.</p>
              </Popover.Body>
            </Popover>
          }
        >
          <Badge pill bg="secondary" className="ms-2">
            ?
          </Badge>
        </OverlayTrigger>
      </Form.Label>
      {image ? (
        <div>
          <Form.Label className={styles.ImagePreview} htmlFor="image-upload">
            <Image src={image} alt="Sound image" />
            <span className={`${btnStyles.YellowButton} ${btnStyles.Small} mt-1 btn d-block`}>Change image</span>
          </Form.Label>
        </div>
      ) : (
        <div>
          <Form.Label htmlFor="image-upload" className="d-block">
            <span className={`${btnStyles.YellowButton} ${btnStyles.Small} mt-2 btn`}>Choose image</span>
          </Form.Label>
        </div>
      )}
      <Form.Control
        className="d-none"
        type="file"
        id="image-upload"
        accept="image/*"
        onChange={handleChangeImage}
        ref={imageInput}
      />

      {errors.image?.map((msg, i) => (
        <Alert className={styles.Alert} variant="warning" key={i}>
          {msg}
        </Alert>
      ))}
    </Form.Group>
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

  const tagErrors = (
    <>
      {errors.tags?.map((msg, i) => (
        <Alert className={styles.Alert} variant="warning" key={i}>
          {msg}
        </Alert>
      ))}
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
    <Form onSubmit={handleSubmit}>
      <Row>
        <h3 className="mb-4">
          Upload new sound
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
            <AudioField sendAudio={setAudio} showMessage={showMessage} />
            {audioErrors}
          </Container>
          <hr className="d-lg-none" />
        </Col>
        <Col lg={7}>
          <Container className={`${appStyles.Content}`}>
            {textFields}

            <LocationField sendLocation={setLocation} showMessage={showMessage} />
            {locationErrors}

            {imageField}

            <TagField sendTags={setTags} showMessage={showMessage} />
            {tagErrors}
          </Container>
          <hr />
          <Container className="d-flex justify-content-center">
            <Button className="btn btn-secondary me-2" onClick={history.goBack}>
              Cancel
            </Button>
            <Button className={`${btnStyles.Button}`} type="submit">
              Upload
            </Button>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default SoundCreateForm;
