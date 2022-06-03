import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Projects.css";

const Modall = (props) => {
  const { name, image, description, liveUrl, github } = props.currentItem;
  window.addEventListener("click", () => {
    props.handleClose();
  });

  return (
    <div className="modal">
      <Modal
        className="modal-header"
        show={props.show}
        onHide={props.handleClose}
        onClick={(e) => e.stopPropagation()}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img className="img" src={image} alt={name} />
          <p>{description}</p>
        </Modal.Body>
        <Modal.Footer className="d-grid gap-2">
          <Button
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            variant="info"
            block
          >
            Live Version
          </Button>

          <Button
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            variant="info"
            block
          >
            See Code
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Modall;
