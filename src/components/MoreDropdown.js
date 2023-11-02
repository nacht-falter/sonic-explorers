import React from "react";

import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";
import appStyles from "../App.module.css";
import { useHistory } from "react-router";

const DropdownIcon = React.forwardRef(({ onClick }, ref) => (
  <i
    className={`${styles.DropdownIcon} fas fa-ellipsis-v ms-2 px-2 fs-6`}
    data-testid="dropdown-icon"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  ></i>
));

export const MoreDropdown = ({ handleEdit, handleShowModal, handleReport, isOwner, item }) => {
  return (
    <Dropdown className="ml-auto" drop="bottom">
      <Dropdown.Toggle as={DropdownIcon} />

      <Dropdown.Menu>
        {isOwner && (
          <>
            <Dropdown.Item
              className={`${styles.DropdownItem} ${appStyles.SmallText}`}
              onClick={handleEdit}
              aria-label={`Edit ${item}`}
            >
              <i className="fas fa-edit me-2" />
              Edit {item}
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              className={`${styles.DropdownItem} ${appStyles.SmallText}`}
              onClick={handleShowModal}
              aria-label={`Delete ${item}`}
            >
              <i className="fas fa-trash me-2" />
              Delete {item}
            </Dropdown.Item>
          </>
        )}
        {item === "sound" && (
          <>
            <Dropdown.Divider />
            <Dropdown.Item
              className={`${styles.DropdownItem} ${appStyles.SmallText}`}
              onClick={handleReport}
              aria-label="Report sound"
            >
              <i className="fas fa-flag me-2" />
              Report {item}
            </Dropdown.Item>
          </>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export function ProfileEditDropdown({ id }) {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={DropdownIcon} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
          className={`${appStyles.SmallText} ${styles.DropdownItem}`}
        >
          <i className="fas fa-user-pen me-2" />
          Edit profile
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username"
          className={`${appStyles.SmallText} ${styles.DropdownItem}`}
        >
          <i className="fas fa-pen-to-square me-2" />
          Change username
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
          className={`${appStyles.SmallText} ${styles.DropdownItem}`}
        >
          <i className="fas fa-key me-2" />
          Change password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
