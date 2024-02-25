// ViewUploads.js
import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

const ViewUploads = () => {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(null);

  // Placeholder array of image file paths
  const uploadedFiles = [
    { name: 'app.pdf', src: '/path/to/app.pdf', alt: 'app' },
    { name: 'cat.png', src: '/path/to/cat.png', alt: 'cat img' },
    { name: 'dog.jpeg', src: '/path/to/dog.jpeg', alt: 'dog img' },
    // ... other file objects
  ];

  const openModal = (index) => {
    setSelectedImage(uploadedFiles[index].src);
    setImageIndex(index);
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const goToPrevious = () => {
    const newIndex = imageIndex === 0 ? uploadedFiles.length - 1 : imageIndex - 1;
    setSelectedImage(uploadedFiles[newIndex].src);
    setImageIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = imageIndex === uploadedFiles.length - 1 ? 0 : imageIndex + 1;
    setSelectedImage(uploadedFiles[newIndex].src);
    setImageIndex(newIndex);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Uploaded Files</h1>
      <Row>
        {uploadedFiles.map((file, index) => (
          <Col key={index} md={4} className="mb-3">
            <div
              className="image-box"
              style={{ cursor: 'pointer' }}
              onClick={() => openModal(index)}
            >
              <img src={file.src} alt={file.name} className="img-fluid" />
            </div>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Image Viewer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedImage} alt="Selected" className="img-fluid" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={goToPrevious}>
            Previous
          </Button>
          <Button variant="secondary" onClick={goToNext}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ViewUploads;
