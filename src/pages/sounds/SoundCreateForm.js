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
import Asset from "../../components/Asset";
import { useHistory } from "react-router-dom";
import { axiosRequest } from "../../api/axiosDefaults";
import LocationPicker from "../../components/LocationPicker";
import TagField from "../../components/TagField";

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
  const audioInput = useRef(null);
  const imageInput = useRef(null);
  const history = useHistory();
  const [locationStatus, setLocationStatus] = useState("Please provide location data for your sound");

  const [showMap, setShowMap] = useState(false);
  const handleCloseMap = () => setShowMap(false);
  const handleShowMap = () => setShowMap(true);

  const handleSelectLocation = (location) => {
    setSoundData({
      ...soundData,
      location: [location.lat, location.lng],
    });
    showMessage("success", "Location data received!");
    handleCloseMap();
  };

  // Instructions for HTML Geolocation API: https://www.w3schools.com/html/html5_geolocation.asp
  const getLocation = () => {
    setLocationStatus("Retrieving location data... Please wait.");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setSoundData({
            ...soundData,
            location: [position.coords.latitude, position.coords.longitude],
          });
          showMessage("success", "Location data received!");
        },
        (error) => {
          console.log(error);
          showMessage("warning", "Failed to retrieve location data. Please try again.");
          setLocationStatus("Could not retrieve location.");
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
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

  const handleChangeAudio = (e) => {
    if (e.target.files.length) {
      URL.revokeObjectURL(audio);
      setSoundData({
        ...soundData,
        audio: URL.createObjectURL(e.target.files[0]),
      });
    }
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
    if (audioInput.current.files.length) {
      formData.append("audio_file", audioInput.current.files[0]);
    }
    if (imageInput.current.files.length) {
      formData.append("image", imageInput.current.files[0]);
    }
    formData.append("latitude", location[0]);
    formData.append("longitude", location[1]);
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

  const audioField = (
    <Form.Group>
      {audio ? (
        <>
          {audio}

          <div>
            <Form.Label className={`${styles.AudioUpload} ${btnStyles.Button} btn`} htmlFor="audio-upload">
              Change audio
            </Form.Label>
          </div>
        </>
      ) : (
        <Form.Label className={`${styles.AudioUpload} d-flex justify-content-center`} htmlFor="audio-upload">
          <Asset icon="fa-solid fa-file-arrow-up" message="Click or tap to upload an audio file" layout="column" />
        </Form.Label>
      )}

      <Form.Control
        className="d-none"
        type="file"
        id="audio-upload"
        accept="audio/*"
        onChange={handleChangeAudio}
        ref={audioInput}
      />

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
    </Form.Group>
  );

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

      <Form.Group className="mb-3">
        <Form.Label>
          Location
          <OverlayTrigger
            placement="top"
            overlay={
              <Popover id="tags-help">
                <Popover.Header as="h3">How to provide location data</Popover.Header>
                <Popover.Body>
                  <p>Please provide the location where the sound was recorded.</p>
                  <p>
                    You can provide geolocation data for your sound by allowing access to your location. Click on{" "}
                    <Badge bg="secondary">Get location</Badge> to retrieve you location.
                  </p>
                  <p>
                    Alternatively you can select your location on a map. Click on{" "}
                    <Badge bg="secondary">Select location on Map</Badge> to open the map.
                  </p>
                </Popover.Body>
              </Popover>
            }
          >
            <Badge pill bg="secondary" className="ms-2">
              ?
            </Badge>
          </OverlayTrigger>
        </Form.Label>
        <Form.Control
          className={styles.Input}
          name="location"
          placeholder={locationStatus}
          value={location}
          onChange={handleChange}
          disabled
        />

        {showMap && <LocationPicker onClose={handleCloseMap} onConfirm={handleSelectLocation} />}

        <Button
          className={`${btnStyles.YellowButton} ${btnStyles.Small} me-2 mt-2`}
          variant="secondary"
          onClick={getLocation}
        >
          Get current location
        </Button>
        <Button className={`${btnStyles.YellowButton} ${btnStyles.Small} mt-2`} onClick={handleShowMap}>
          Select location on map
        </Button>
      </Form.Group>

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

      {errors.tags?.map((msg, i) => (
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

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <h3 className="mb-4">Upload new sound</h3>
        <Col lg={5}>
          <Container>{audioField}</Container>
          <hr className="d-lg-none" />
        </Col>
        <Col lg={7}>
          <Container className={`${appStyles.Content}`}>
            {textFields}
            {imageField}
            <TagField sendTags={setTags} showMessage={showMessage} />
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
