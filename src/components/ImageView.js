import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ImageView = ({ show, onHide, image, onNext, onPrevious }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Body>
        <img src={image} alt={image} style={{ width: '100%' }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onPrevious}>Previous</Button>
        <Button variant="primary" onClick={onNext}>Next</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageView;