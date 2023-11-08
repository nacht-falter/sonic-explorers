import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Spinner from "react-bootstrap/Spinner";

import { axiosRequest } from "../../api/axiosDefaults";
import { useCurrentUser, useSetCurrentUser } from "../../contexts/CurrentUserContext";

import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Avatar from "../../components/Avatar";
import Asset from "../../components/Asset";
import { useRedirect } from "../../hooks/useRedirect";

const ProfileEditForm = ({ showMessage }) => {
  useRedirect("loggedOut");
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const [profileData, setProfileData] = useState({
    name: "",
    display_name: "",
    description: "",
    avatar: "",
  });
  const { name, display_name, description, avatar } = profileData;

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser) {
        if (currentUser?.profile_id?.toString() === id) {
          try {
            const { data } = await axiosRequest.get(`/profiles/${id}`);
            const { name, display_name, description, avatar } = data;
            setProfileData({ name, display_name, description, avatar });
          } catch (err) {
            // console.log(err);
            history.push("/");
          }
        } else {
          showMessage("warning", "You are not allowed to edit this profile.");
          history.push("/");
        }
        setHasLoaded(true);
      }
    };

    handleMount();
  }, [currentUser, history, id, showMessage]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowSpinner(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("display_name", display_name);
    formData.append("description", description);

    if (imageFile?.current?.files[0]) {
      formData.append("avatar", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosRequest.put(`/profiles/${id}`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_avatar: data.avatar,
      }));
      history.goBack();
      showMessage("success", "Profile updated successfully.");
    } catch (err) {
      // console.log(err);
      setErrors(err.response?.data);
    } finally {
      setShowSpinner(false);
    }
  };

  const textFields = (
    <>
      <h3 className="mb-3 d-none d-md-block fs-4">Edit profile</h3>
      <Form.Group>
        <FloatingLabel controlId="floatingName" className="mb-2" label="My name">
          <Form.Control type="text" value={display_name} onChange={handleChange} name="display_name" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingDescription" className="mb-2" label="About me">
          <Form.Control
            as="textarea"
            value={description}
            onChange={handleChange}
            name="description"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
      </Form.Group>

      {errors?.description?.map((message, idx) => (
        <Alert className={`${appStyles.SmallText}`} variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Button
        className={`${btnStyles.Small} ${btnStyles.Narrow} btn-secondary me-2 mt-2`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Small} mt-2`} type="submit" disabled={showSpinner}>
        {showSpinner ? <Spinner size="sm" /> : "Save changes"}
      </Button>
    </>
  );

  return hasLoaded ? (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container>
            <h3 className="mb-3 d-md-none fs-3">Edit profile</h3>
            <Form.Group>
              <Form.Label htmlFor="image-upload" className>
                {avatar && (
                  <figure>
                    <Avatar src={avatar} height={250} />
                  </figure>
                )}
                {errors?.avatar?.map((message, idx) => (
                  <Alert className={`${appStyles.SmallText}`} variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                <div className={`${btnStyles.YellowButton} ${btnStyles.Small} mb-3 btn my-auto`}>
                  Change profile image
                </div>
              </Form.Label>
              <Form.Control
                className="d-none"
                type="file"
                id="image-upload"
                ref={imageFile}
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files.length) {
                    setProfileData({
                      ...profileData,
                      avatar: URL.createObjectURL(e.target.files[0]),
                    });
                  }
                }}
              />
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  ) : (
    <Asset spinner />
  );
};

export default ProfileEditForm;
