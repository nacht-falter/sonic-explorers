import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { axiosRequest } from "../../api/axiosDefaults";
import { useCurrentUser, useSetCurrentUser } from "../../contexts/CurrentUserContext";

import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Avatar from "../../components/Avatar";
import Asset from "../../components/Asset";

const ProfileEditForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();
  const [hasLoaded, setHasLoaded] = useState(false);

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
            console.log(err);
            history.push("/");
          }
        } else {
          history.push("/");
        }
        setHasLoaded(true);
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  const textFields = (
    <>
      <h3 className="mb-3 d-none d-md-block fs-4">Edit profile</h3>
      <Form.Group>
        <FloatingLabel className="mb-2" label="Name">
          <Form.Control type="text" value={display_name} onChange={handleChange} name="display_name" />
        </FloatingLabel>
        <FloatingLabel className="mb-2" label="Username">
          <Form.Control as="textarea" value={description} onChange={handleChange} name="description" rows={7} />
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
      <Button className={`${btnStyles.Button} ${btnStyles.Small} ${btnStyles.Narrow} mt-2`} type="submit">
        Save
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
