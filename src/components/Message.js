import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

const Message = (props) => {
  const { type, text } = props;
  const [show, setShow] = useState(true);

  return (
    <div className="position-absolute z-3 col-10 offset-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
      <Alert className="mt-5 m-2 px-5 pt-2 pb-0" variant={type} show={show} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{type.charAt(0).toUpperCase() + type.slice(1) + "!"}</Alert.Heading>
        <p>{text}</p>
      </Alert>
    </div>
  );
};

export default Message;
