import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import styles from "../../styles/CommentCreateForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import Avatar from "../../components/Avatar";
import { axiosResponse } from "../../api/axiosDefaults";

function CommentCreateForm(props) {
  const { sound, setSound, setComments, profileAvatar, profileId } = props;
  const [content, setContent] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowSpinner(true);
    try {
      const { data } = await axiosResponse.post("/comments/", {
        content,
        sound,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setSound((prevSound) => ({
        results: [
          {
            ...prevSound.results[0],
            comments_count: prevSound.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
    } catch (err) {
      // console.log(err);
    } finally {
      setShowSpinner(false);
    }
  };

  return (
    <Form className={`${styles.Form} pb-3 mb-3`} onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profileId}`}>
            <Avatar src={profileAvatar} />
          </Link>
          <Form.Control
            className="rounded ms-1"
            placeholder="Leave a comment"
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <Button
        className={`${btnStyles.YellowButton} ${appStyles.SmallText} btn d-block ms-auto mt-2`}
        size="sm"
        disabled={!content.trim() || showSpinner}
        type="submit"
      >
        {showSpinner ? <Spinner size="sm" /> : "Comment"}
      </Button>
    </Form>
  );
}

export default CommentCreateForm;
