import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory, useParams } from "react-router";
import { axiosRequest } from "../../api/axiosDefaults";
import { useProfileData, useSetProfileData } from "../../contexts/ProfileDataContext";
import { Button, Image } from "react-bootstrap";
import PopularProfiles from "./PopularProfiles";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const setProfileData = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }] = await Promise.all([axiosRequest.get(`/profiles/${id}`)]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        console.log(pageProfile);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const profileDetails = (
    <>
      <Row className="text-center">
        <Col lg={3} className="text-lg-start">
          <Image className={styles.ProfileAvatar} roundedCircle src={profile?.avatar} />
        </Col>
        <Col lg={currentUser && !profile?.is_owner && !profile?.following_id ? 7 : 9}>
          <h3 className="mt-2 mt-lg-3">{profile?.display_name ? profile?.display_name : profile?.owner}</h3>
          {profile?.description && <Col className="p-3">{profile.description}</Col>}
          <Row className="justify-content-center">
            <Col xs={3} className="mt-2">
              <div>{profile?.sounds_count}</div>
              <div>Sounds</div>
            </Col>
            <Col xs={3} className="mt-2">
              <div>{profile?.followers_count}</div>
              <div>Followers</div>
            </Col>
            <Col xs={3} className="mt-2">
              <div>{profile?.following_count}</div>
              <div>Following</div>
            </Col>
          </Row>
        </Col>
        {currentUser &&
          !profile?.is_owner &&
          (profile?.following_id ? (
            <Col lg={2} className="text-lg-end mt-2">
              <Button className={`${btnStyles.Button} ${btnStyles.Narrow} ${btnStyles.Small} `} onClick={() => {}}>
                Unfollow
              </Button>
            </Col>
          ) : (
            <Col lg={2} className="text-lg-end mt-2">
              <Button className={`${btnStyles.Button} ${btnStyles.Narrow} ${btnStyles.Small} `} onClick={() => {}}>
                Follow
              </Button>
            </Col>
          ))}
      </Row>
    </>
  );

  return (
    <Container>
      <Button onClick={history.goBack} variant="light" size="sm" className={`${appStyles.SmallText} mb-2`}>
        <i className="fa-solid fa-caret-left"></i> Go back
      </Button>
      <Row>
        <Col lg={8}>
          {hasLoaded ? (
            <Container className={`${appStyles.ComponentContainer} p-3`}>{profileDetails}</Container>
          ) : (
            <Asset spinner />
          )}
        </Col>
        <Col lg={4} className="d-none d-lg-block">
          <PopularProfiles />
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;
