import { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";
import SoundDetail from "./SoundDetail";

import { useLocation } from "react-router-dom";
import { axiosRequest } from "../../api/axiosDefaults";

import NoResults from "../../assets/images/no-results512.png";

function SoundListPage({ heading, message, filter = "" }) {
  const [sounds, setSounds] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchSounds = async () => {
      try {
        const { data } = await axiosRequest.get(`/sounds/${filter}`);
        setHasLoaded(true);
        setSounds(data);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchSounds();
  }, [filter, pathname]);

  return (
    <Row className="h-100">
      <h3>{heading}</h3>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {hasLoaded ? (
          <>
            {sounds.results.length ? (
              sounds.results.map((sound) => <SoundDetail key={sound.id} {...sound} setSounds={setSounds} />)
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
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2"></Col>
    </Row>
  );
}

export default SoundListPage;
