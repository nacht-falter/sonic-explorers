import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { useParams } from "react-router";
import { axiosRequest } from "../../api/axiosDefaults";
import SoundDetail from "./SoundDetail";
import Asset from "../../components/Asset";

function SoundPage() {
  const { id } = useParams();
  const [sound, setSound] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: sound }] = await Promise.all([axiosRequest.get(`/sounds/${id}`)]);
        setSound({ results: [sound] });
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {hasLoaded ? (
          <>
            <SoundDetail {...sound.results[0]} setSounds={setSound} soundPage />
            <Container>Comments</Container>
          </>
        ) : (
          <Container>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2"></Col>
    </Row>
  );
}

export default SoundPage;
