import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { axiosRequest } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/SoundPage.module.css";

import SoundDetail from "./SoundDetail";
import Asset from "../../components/Asset";
import CommentCreateForm from "../comments/CommentCreateForm";
import Comment from "../comments/Comment";

import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

function SoundPage() {
  const { id } = useParams();
  const [sound, setSound] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const profileAvatar = currentUser?.profile_avatar;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: sound }, { data: comments }] = await Promise.all([
          axiosRequest.get(`/sounds/${id}`),
          axiosRequest.get(`/comments/?sound=${id}`),
        ]);
        setSound({ results: [sound] });
        setComments(comments);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
        setHasLoaded(true);
      }
    };

    setHasLoaded(false);
    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {hasLoaded ? (
          sound.results.length ? (
            <>
              <SoundDetail {...sound.results[0]} setSounds={setSound} soundPage />
              <Container>
                <div className={styles.CommentSection}>
                  {currentUser && (
                    <CommentCreateForm
                      profileId={currentUser.profile_id}
                      profileAvatar={profileAvatar}
                      sound={id}
                      setSound={setSound}
                      setComments={setComments}
                    />
                  )}
                  <h5 className="mb-2">Comments</h5>
                  {comments.results.length ? (
                    <InfiniteScroll
                      children={comments.results.map((comment) => (
                        <Comment key={comment.id} {...comment} setSound={setSound} setComments={setComments} />
                      ))}
                      dataLength={comments.results.length}
                      loader={
                        <div className="text-muted text-center">
                          <Spinner />
                        </div>
                      }
                      hasMore={!!comments.next}
                      next={() => fetchMoreData(comments, setComments)}
                    />
                  ) : currentUser ? (
                    <p className="ps-2 text-muted">Be the first to comment!</p>
                  ) : (
                    <p className="ps-2 text-muted">
                      <Link to="/login">Log in</Link> to comment!
                    </p>
                  )}
                </div>
              </Container>
            </>
          ) : (
            <SoundDetail notFound soundPage />
          )
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
