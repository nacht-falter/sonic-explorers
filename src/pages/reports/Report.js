import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosResponse } from "../../api/axiosDefaults";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

import ConfirmationModal from "../../components/ConfirmationModal";
import Avatar from "../../components/Avatar";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import Button from "react-bootstrap/Button";

const Report = (props) => {
  const {
    id,
    owner,
    sound,
    profile_id: profileId,
    profile_avatar: profileAvatar,
    created_at: createdAt,
    flag,
    content,
    review_status: reviewStatus,
    setReports,
    showMessage,
  } = props;
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleSetStatus = async () => {
    try {
      await axiosResponse.patch(`/reports/${id}`, { review_status: reviewStatus === "open" ? "closed" : "open" });
      setReports((prevReports) => ({
        ...prevReports,
        results: prevReports.results.map((report) => {
          return report.id === id ? { ...report, review_status: reviewStatus === "open" ? "closed" : "open" } : report;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axiosResponse.delete(`/reports/${id}`);
      setReports((prevReports) => ({
        ...prevReports,
        results: prevReports.results.filter((report) => report.id !== id),
      }));
    } catch (err) {
      // console.log(err);
    } finally {
      showMessage("success", "Report deleted.");
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
    <>
      <Card className="mt-3 me-3 border-secondary" bg="light">
        <Card.Header className="d-flex justify-content-between">
          <span>
            <i className="fa-solid fa-flag me-2"></i>
            <span>"{flags[flag]}" report for </span>
            <Link to={`/sounds/${sound}`}>
              <span>
                Sound {sound}
                <small>
                  <i className="fa-solid fa-arrow-up-right-from-square ms-1"></i>
                </small>
              </span>
            </Link>
          </span>
          {reviewStatus === "open" && (
            <span>
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger rounded-circle">
                <span className="visually-hidden">New reports</span>
              </span>
            </span>
          )}
          <small className="text-muted">{createdAt}</small>
        </Card.Header>
        <Card.Body>
          <ListGroup className={`${appStyles.SmallText} mb-1 me-0`}>
            <ListGroup.Item>
              <p className="mt-0 mb-1">
                <strong>Flag</strong>
              </p>
              <p className="mt-0 mb-1">{flags[flag]}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p className="mt-0 mb-1">
                <strong>Review status</strong>
              </p>
              <Badge bg={reviewStatus === "open" ? "danger" : "success"} size="" className="pt-1 fs-6">
                <small>{reviewStatus}</small>
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item className="flex-fill">
              <p className="mt-0 mb-1">
                <strong>Details</strong>
              </p>
              <p className="mt-0 mb-1">{content}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p className="mt-0 mb-1">
                <strong>Reported by</strong>
              </p>
              <Link to={`/profiles/${profileId}`} className="me-2">
                <Avatar src={profileAvatar} height={30} />
                {owner}
              </Link>
            </ListGroup.Item>
          </ListGroup>
          <Link to={`/sounds/${sound}`} className="ms-2">
            <i className="fa-solid fa-arrow-right me-2"></i>Review sound
          </Link>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end align-items-center">
          <Button
            aria-label="Delete"
            title="Delete Report"
            className={`btn-danger me-2 ${btnStyles.Small} ${btnStyles.Narrow}`}
            onClick={handleShowModal}
          >
            <i className="fa-solid fa-trash"></i>
          </Button>
          {reviewStatus === "open" ? (
            <Button className={`btn-success ${btnStyles.Small} ${btnStyles.Narrow}`} onClick={handleSetStatus}>
              Close report
            </Button>
          ) : (
            <Button className={`btn-secondary ${btnStyles.Small} ${btnStyles.Narrow}`} onClick={handleSetStatus}>
              Reopen report
            </Button>
          )}
        </Card.Footer>
      </Card>

      <ConfirmationModal
        show={showModal}
        setShow={setShowModal}
        handleMethod={handleDelete}
        title="Delete Report?"
        body="Do you want to delete this report?"
        type="danger"
      />
    </>
  );
};

export default Report;
