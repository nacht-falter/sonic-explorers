import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { axiosResponse } from "../../api/axiosDefaults";

function ReportCreateForm({ soundId, soundTitle, show, setShow }) {
  const [errors, setErrors] = useState({});
  const [content, setContent] = useState("");
  const [flag, setFlag] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSelect = (event) => {
    setFlag(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowSpinner(true);
    try {
      await axiosResponse.post("/reports/", {
        flag,
        sound: soundId,
        content,
      });
      setContent("");
      setShow(false);
    } catch (err) {
      // console.log(err);
      setErrors(err.response.data);
    } finally {
      setShowSpinner(false);
    }
  };
  const flags = {
    hate: "Hate speech",
    illegal: "Illegal/extremist content",
    violence: "Violent content",
    pornographic: "Pornographic Content",
    harassment: "Harassment or bullying",
    privacy: "Privacy violation",
    property: "Intellectual property violation",
    other: "Other",
  };

  return (
    <Modal show={show} backdrop="static">
      <Modal.Header className="pb-2">
        <Modal.Title>Report inappropriate content</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Create report for <strong>{soundTitle}</strong>
        </p>
        <ReportCreateForm sound={soundId} setShow={setShow} />
        <Form className="pb-3 mb-3" onSubmit={handleSubmit}>
          <Form.Group>
            <InputGroup>
              <Form.Select aria-label="select-flag" onChange={handleSelect}>
                <option>Please select an option.</option>
                {Object.entries(flags).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </Form.Select>
            </InputGroup>

            {errors.flag?.map((message, idx) => (
              <Alert className={`${appStyles.SmallText}`} variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <InputGroup className="mt-3">
              <Form.Control
                className="rounded"
                placeholder="Please provide additional details"
                as="textarea"
                value={content}
                onChange={handleChange}
                rows={2}
              />
            </InputGroup>
          </Form.Group>

          {errors.content?.map((message, idx) => (
            <Alert className={`${appStyles.SmallText}`} variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <span className="d-flex justify-content-end">
            <Button
              className={`btn-secondary ${appStyles.SmallText} btn me-2 mt-2`}
              size="sm"
              onClick={() => setShow(false)}
            >
              Cancel
            </Button>
            <Button
              className={`${btnStyles.YellowButton} ${appStyles.SmallText} btn mt-2`}
              size="sm"
              disabled={!content.trim() || showSpinner}
              type="submit"
            >
              {showSpinner ? <Spinner size="sm" /> : "Send report"}
            </Button>
          </span>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ReportCreateForm;
