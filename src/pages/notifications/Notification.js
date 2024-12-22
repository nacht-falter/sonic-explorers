import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosResponse } from "../../api/axiosDefaults";

import Card from "react-bootstrap/Card";

import ConfirmationModal from "../../components/ConfirmationModal";
import Avatar from "../../components/Avatar";

import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";

const Notification = (props) => {
  const {
    id,
    sender_avatar: senderAvatar,
    sent_at: sentAt,
    item_id: itemId,
    is_read: isRead,
    title,
    content,
    category,
    setNotifications,
    showMessage,
  } = props;
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleSetRead = async () => {
    try {
      await axiosResponse.patch(`/notifications/${id}`, { is_read: !isRead });
      setNotifications((prevNotifications) => ({
        ...prevNotifications,
        results: prevNotifications.results.map((notification) => {
          return notification.id === id ? { ...notification, is_read: !isRead } : notification;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axiosResponse.delete(`/notifications/${id}`);
      setNotifications((prevNotifications) => ({
        ...prevNotifications,
        results: prevNotifications.results.filter((notification) => notification.id !== id),
      }));
    } catch (err) {
      // console.log(err);
    } finally {
      showMessage("success", "Notification deleted.");
    }
  };

  return (
    <>
      <Card className="mt-3 me-3 border-secondary" bg="light">
        <Card.Header className="d-flex justify-content-between">
          {isRead ? (
            <span>
              <i className="fa-solid fa-envelope-open me-2"></i>
              {title}
            </span>
          ) : (
            <span>
              <i className="fa-solid fa-envelope me-2"></i>
              <strong>{title}</strong>
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </span>
          )}

          <small className="text-muted">{sentAt}</small>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Avatar src={senderAvatar} height={30} /> {content}
          </Card.Text>
          <Card.Text className="d-flex justify-content-between flex-wrap gap-2">
            <span>
              {category !== "follow" && (
                <Link to={`/sounds/${itemId}`} className="ms-sm-2">
                <Button variant="outline-secondary" className={`${btnStyles.Small} ${btnStyles.Narrow}`}>
                    <i className="fa-solid fa-arrow-right me-2"></i>Go to sound
                  </Button>
                </Link>
              )}
              {category === "report" && (
                <Link to={`/reports/`} className="ms-2">
                <Button variant="outline-secondary" className={`${btnStyles.Small} ${btnStyles.Narrow}`}>
                    <i className="fa-solid fa-arrow-right me-2"></i>Go to reports page
                  </Button>
                </Link>
              )}
            </span>
            <span>
              <Button
                aria-label="Delete"
                title="Delete Notification"
                className={`btn-danger me-2 ${btnStyles.Small} ${btnStyles.Narrow}`}
                onClick={handleShowModal}
              >
                <i className="fa-solid fa-trash"></i>
              </Button>
              {isRead ? (
                <Button className={`btn-secondary ${btnStyles.Small} ${btnStyles.Narrow}`} onClick={handleSetRead}>
                  Mark as unread
                </Button>
              ) : (
                <Button className={`btn ${btnStyles.Small} ${btnStyles.Narrow}`} onClick={handleSetRead}>
                  Mark as read
                </Button>
              )}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>

      <ConfirmationModal
        show={showModal}
        setShow={setShowModal}
        handleMethod={handleDelete}
        title="Delete Notification?"
        body="Do you want to delete this notification?"
        type="danger"
      />
    </>
  );
};

export default Notification;
