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

export const MoreDropdown = ({ handleShowModal, isOwner }) => {
  return (
    <Dropdown className="ml-auto" drop="bottom">
      <Dropdown.Toggle as={DropdownIcon} />

      <Dropdown.Menu>
        {isOwner && (
          <>
            <Dropdown.Item
              className={`${styles.DropdownItem} ${appStyles.SmallText}`}
              onClick={handleShowModal}
              aria-label="delete sound"
            >
              <i className="fas fa-trash me-2" />
              Delete Sound
            </Dropdown.Item>
          </>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};
