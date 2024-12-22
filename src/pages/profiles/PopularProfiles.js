import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Avatar from "../../components/Avatar";
import Asset from "../../components/Asset";
import Stack from "react-bootstrap/Stack";
import Profile from "./Profile";
import appStyles from "../../App.module.css";
import { useProfileData } from "../../contexts/ProfileDataContext";

const PopularProfiles = ({ mobile }) => {
  const { popularProfiles } = useProfileData();

  return (
    <>
      {popularProfiles.results.length > 0 ? (
        <Card bg="light" className={`${appStyles.ComponentContainer} ${mobile && "d-lg-none mb-3"}`}>
          <Card.Header>
            <strong>Popular Explorers</strong>
          </Card.Header>
          <Card.Body className="pt-0">
            {mobile ? (
              <div className="d-flex justify-content-between">
                {popularProfiles.results.slice(0, 4).map((profile) => (
                  <Link key={profile.id} to={`/profiles/${profile.id}`}>
                    <Stack className="text-center mt-3">
                      <Avatar src={profile.avatar} height={30} stack />
                      <span>{profile.display_name ? profile.display_name : profile.owner}</span>
                    </Stack>
                  </Link>
                ))}
              </div>
            ) : (
              popularProfiles.results.map((profile) => <Profile key={profile.id} profile={profile} />)
            )}
          </Card.Body>
        </Card>
      ) : (
        <Asset spinner />
      )}
    </>
  );
};

export default PopularProfiles;
