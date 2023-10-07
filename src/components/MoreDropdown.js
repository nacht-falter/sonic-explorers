import React from "react";

import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";
import appStyles from "../App.module.css";

const DropdownIcon = React.forwardRef(({ onClick }, ref) => (
  <i
    className={`${styles.DropdownIcon} fas fa-ellipsis-v ms-2 px-2 fs-6`}
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  ></i>
));

export const MoreDropdown = ({ handleEdit, handleShowModal, isOwner, item }) => {
  return (
    <Dropdown className="ml-auto" drop="bottom">
      <Dropdown.Toggle as={DropdownIcon} />

      <Dropdown.Menu>
        {isOwner && (
          <>
            <Dropdown.Item
              className={`${styles.DropdownItem} ${appStyles.SmallText}`}
              onClick={handleEdit}
              aria-label="edit {item}"
            >
              <i className="fas fa-edit me-2" />
              Edit {item}
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              className={`${styles.DropdownItem} ${appStyles.SmallText}`}
              onClick={handleShowModal}
              aria-label="delete {item}"
            >
              <i className="fas fa-trash me-2" />
              Delete {item}
            </Dropdown.Item>
          </>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};
