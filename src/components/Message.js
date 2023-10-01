import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import appStyles from "../App.module.css";
import styles from "../styles/Message.module.css";

const Message = (props) => {
  const { type, text } = props;
  const [show, setShow] = useState(true);

  return (
    <div className="position-fixed bottom-0 mb-5 z-3 col-10 offset-1 col-sm-6 offset-sm-3 col-xl-4 offset-xl-4">
      <Alert
        className={`${styles.Alert} mt-3 mx-2 px-5 py-auto pb-0 text-center`}
        variant={type}
        show={show}
        onClose={() => setShow(false)}
        dismissible
      >
        <p className={appStyles.SmallText}>{text}</p>
      </Alert>
    </div>
  );
};

export default Message;
