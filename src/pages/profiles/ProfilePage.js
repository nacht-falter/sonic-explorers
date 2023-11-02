import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory, useParams } from "react-router";
import { axiosRequest } from "../../api/axiosDefaults";
import { useProfileData, useSetProfileData } from "../../contexts/ProfileDataContext";

import { ProfileEditDropdown } from "../../components/MoreDropdown";
import PopularProfiles from "./PopularProfiles";
import Avatar from "../../components/Avatar";
import Asset from "../../components/Asset";

import { fetchMoreData } from "../../utils/utils";
import InfiniteScroll from "react-infinite-scroll-component";
import Sound from "../sounds/SoundDetail";

import NoResults from "../../assets/images/no-results512.png";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const [profileSounds, setProfileSounds] = useState({ results: [] });
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profileSounds }] = await Promise.all([
          axiosRequest.get(`/profiles/${id}`),
          axiosRequest.get(`/sounds/?user=${id}`),
        ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfileSounds(profileSounds);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const profileDetails = (
    <>
      <Row className="text-center">
        <Col xs={10} lg={3} className="d-lg-flex offset-1 offset-lg-0 text-lg-start align-items-center">
          <Avatar src={profile?.avatar} height={180} />
        </Col>
        {profile?.is_owner && currentUser && (
          <Col xs={1} className="d-lg-none d-flex justify-content-center">
            <ProfileEditDropdown id={profile?.id} />
          </Col>
        )}
        <Col lg={currentUser && !profile?.is_owner ? 7 : 8}>
          <h3 className="mt-2 mt-lg-3 mb-1">{profile?.display_name ? profile?.display_name : profile?.owner}</h3>
          <span className={`${appStyles.SmallText} text-muted`}>{profile?.name ? profile?.name : profile?.owner}</span>
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
          (!profile?.is_owner ? (
            profile?.follow_id ? (
              <Col lg={2} className="text-lg-end mt-2">
                <Button
                  className={`${btnStyles.YellowButton} ${btnStyles.Narrow} ${btnStyles.Small} `}
                  onClick={() => {
                    handleUnfollow(profile);
                  }}
                >
                  Unfollow
                </Button>
              </Col>
            ) : (
              <Col lg={2} className="text-lg-end mt-2">
                <Button
                  className={`${btnStyles.YellowButton} ${btnStyles.Narrow} ${btnStyles.Small} `}
                  onClick={() => handleFollow(profile)}
                >
                  Follow
                </Button>
              </Col>
            )
          ) : (
            <Col lg={1} className="d-none d-lg-flex justify-content-center">
              <ProfileEditDropdown id={profile?.id} />
            </Col>
          ))}
      </Row>
    </>
  );

  const profileSoundList = (
    <>
      <hr />
      <p className="text-center"><strong>{profile?.display_name ? profile.display_name : profile?.owner}'s sounds</strong></p>
      {profileSounds.results.length ? (
        <InfiniteScroll
          children={profileSounds.results.map((sound) => (
            <Sound key={sound.id} {...sound} setSounds={setProfileSounds} />
          ))}
          dataLength={profileSounds.results.length}
          loader={<Asset spinner />}
          hasMore={!!profileSounds.next}
          next={() => fetchMoreData(profileSounds, setProfileSounds)}
        />
      ) : (
        <Asset
          img={NoResults}
          message={
            <span>
              No results found. {`${profile?.display_name ? profile.display_name : profile?.owner}`} hasn't shared any
              sounds yet.
            </span>
          }
        />
      )}
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
            <Container className={`${appStyles.ComponentContainer} p-3`}>
              {profileDetails}
              {profileSoundList}
            </Container>
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
