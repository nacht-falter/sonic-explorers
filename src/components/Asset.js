import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

const Asset = ({ spinner, img, icon, message, layout }) => {
  // if layout is not passed or something other than "row" or "column" is passed, default to "column"
  return (
    <div className={`${styles.Asset} ${layout && styles[layout]}`}>
      {spinner && <Spinner animation="border" />}
      {img && <img src={img} alt={message} />}
      {icon && <i className={icon}></i>}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Asset;
