import { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import Asset from "../../components/Asset";
import SoundDetail from "./SoundDetail";

import { useLocation } from "react-router-dom";
import { axiosRequest } from "../../api/axiosDefaults";
import styles from "../../styles/SoundListPage.module.css";

import NoResults from "../../assets/images/no-results512.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import LoggedOutMessage from "../../components/LoggedOutMessage";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function SoundListPage({ heading, message, filter = "" }) {
  const currentUser = useCurrentUser();
  const [sounds, setSounds] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchSounds = async () => {
      try {
        const { data } = await axiosRequest.get(`/sounds/?${filter}search=${query}`);
        setHasLoaded(true);
        setSounds(data);
      } catch (err) {
        // console.log(err);
      }
    };

    setHasLoaded(false);
    if (query) {
      const queryTimer = setTimeout(() => {
        fetchSounds();
      }, 1000);
      return () => clearTimeout(queryTimer);
    } else {
      fetchSounds();
    }
  }, [filter, query, pathname, currentUser]);

  return !currentUser && pathname !== "/" ? (
    <LoggedOutMessage />
  ) : (
    <Row className="h-100">
      <h3>{heading}</h3>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Container>
          <PopularProfiles mobile />
          <i className={`fas fa-search ${styles.SearchIcon}`} />
          <Form className={styles.SearchBar} id="searchBar" onSubmit={(event) => event.preventDefault()}>
            <Form.Control
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              className="mr-sm-2"
              placeholder="Search for sounds, tags, or users"
            />
          </Form>
        </Container>

        {hasLoaded ? (
          <>
            {sounds.results.length ? (
              <InfiniteScroll
                children={sounds.results.map((sound) => (
                  <SoundDetail key={sound.id} {...sound} setSounds={setSounds} />
                ))}
                dataLength={sounds.results.length}
                loader={<Asset spinner />}
                hasMore={!!sounds.next}
                next={() => fetchMoreData(sounds, setSounds)}
              />
            ) : (
              <Container>
                <Asset img={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default SoundListPage;
