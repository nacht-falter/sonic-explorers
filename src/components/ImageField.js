import React, { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Image from "react-bootstrap/Image";
import btnStyles from "../styles/Button.module.css";
import styles from "../styles/ImageField.module.css";

const ImageField = ({ sendImage, previousImage }) => {
  const [image, setImage] = useState(previousImage?.length ? previousImage : "");
  const imageInput = useRef(null);
  const [imageChanged, setImageChanged] = useState(false);

  useEffect(() => {
    if (imageChanged) {
      sendImage(image);
      setImageChanged(false);
    }
  }, [image, imageChanged, sendImage]);

  const handleChangeImage = (e) => {
    if (e.target.files.length) {
      setImage(e.target.files[0]);
      setImageChanged(true);
    }
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor="image-upload">
        Image
        <OverlayTrigger
          placement="top"
          overlay={
            <Popover id="tags-help">
              <Popover.Header as="h3">Sound images</Popover.Header>
              <Popover.Body>
                <p>If you can, take a picture of the situation in which you recorded the sound and upload it here.</p>
                <p>If you don't provide an image, a random image based on the tags you entered will be used.</p>
                <p>You can also upload the image later by editing your sound if you prefer.</p>
              </Popover.Body>
            </Popover>
          }
        >
          <Badge pill bg="secondary" className="ms-2">
            ?
          </Badge>
        </OverlayTrigger>
      </Form.Label>
      {image ? (
        <div>
          <Form.Label className={styles.ImagePreview} htmlFor="image-upload">
            <Image src={image.length ? image : URL.createObjectURL(image)} alt="Sound image" />
            <span className={`${btnStyles.YellowButton} ${btnStyles.Small} mt-1 btn d-block`}>Change image</span>
          </Form.Label>
        </div>
      ) : (
        <div>
          <Form.Label htmlFor="image-upload" className="d-block">
            <span className={`${btnStyles.YellowButton} ${btnStyles.Small} mt-2 btn`}>Choose image</span>
          </Form.Label>
        </div>
      )}
      <Form.Control
        className="d-none"
        type="file"
        id="image-upload"
        accept="image/*"
        onChange={handleChangeImage}
        ref={imageInput}
      />
    </Form.Group>
  );
};

export default ImageField;
