import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ConfirmationModal = ({ handleMethod, show, setShow, title, body, type }) => {
  return (
    <>
      <Modal show={show} backdrop="static" keyboard={false} className="mt-3">
        <Modal.Header className="bg-light py-2" closeButton onClick={() => setShow(false)}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer className="bg-light py-1">
          <Button variant="secondary" size="sm" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant={type} size="sm" onClick={handleMethod}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
