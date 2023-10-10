import React from "react";
import Spinner from "react-bootstrap/Spinner";
import styles from "../styles/Asset.module.css";
import appStyles from "../App.module.css";

const Asset = ({ spinner, img, icon, message, layout }) => {
  return (
    <div className={`${appStyles.ComponentContainer} ${styles.Asset} ${layout && styles[layout]}`}>
      {spinner && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {img && <img src={img} alt={message} />}
      {icon && <i className={icon}></i>}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Asset;
