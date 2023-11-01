import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import { axiosResponse } from "../../api/axiosDefaults";
import btnStyles from "../../styles/Button.module.css";

function CommentEditForm(props) {
  const { id, content, setShowEditForm, setComments } = props;
  const [formContent, setFormContent] = useState(content);
  const [showSpinner, setShowSpinner] = useState(false);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowSpinner(true);
    try {
      await axiosResponse.put(`/comments/${id}`, {
        content: formContent.trim(),
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                updated_at: "now",
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {
      // console.log(err);
    } finally {
      setShowSpinner(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Control as="textarea" value={formContent} onChange={handleChange} rows={2} />
      </Form.Group>
      <div className="d-flex justify-content-end mt-2">
        <Button
          className={`${btnStyles.Small} btn btn-secondary me-2`}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          Cancel
        </Button>
        <Button
          className={`${btnStyles.YellowButton} ${btnStyles.Small}`}
          disabled={!formContent.trim() || showSpinner}
          type="submit"
        >
          {showSpinner ? <Spinner size="sm" /> : "Save changes"}
        </Button>
      </div>
    </Form>
  );
}

export default CommentEditForm;
