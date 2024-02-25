// FileUploadsUI
import React, { useState } from 'react';
import { ProgressBar, Button, Form, ListGroup, Container, Row, Col, ButtonToolbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const FileUploadUI = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const navigate = useNavigate();

  const handleFileSelect = (event) => {
    const files = event.target.files;
    const fileNames = [];
    for (let i = 0; i < files.length; i++) {
      fileNames.push(files[i].name);
    }
    setSelectedFiles(fileNames);
  };

  const viewUploadedFiles = () => {
    navigate('/view-uploads');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h1 className="text-center mb-4">Upload Files</h1>
          <Form>
            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>Select S3 Bucket</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Option 01</option>
                <option value="1">Option 02</option>
                <option value="2">Option 03</option>
                {/* ... other options */}
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="fileInput" className="mb-3">
              <Form.Label>Browse Files</Form.Label>
              <Form.Control
                type="file"
                multiple
                onChange={handleFileSelect}
              />
            </Form.Group>

            {selectedFiles.length > 0 && (
              <ListGroup className="mb-4">
                <ListGroup.Item>
                  You have selected {selectedFiles.length} files:
                  {selectedFiles.map((file, index) => (
                    <ListGroup.Item key={index}>{file}</ListGroup.Item>
                  ))}
                </ListGroup.Item>
              </ListGroup>
            )}

            <ProgressBar now={uploadPercentage} label={`${uploadPercentage}%`} className="mb-3" />

            <ButtonToolbar>
              <Button
                variant="success"
                className="mb-3 me-2"
                onClick={() => setUploadPercentage(100)}
                disabled={selectedFiles.length === 0}
              >
                Upload Files
              </Button>

              <Button
                variant="primary"
                className="mb-3"
                onClick={viewUploadedFiles}
              >
                View Uploaded Files
              </Button>
            </ButtonToolbar>

            {uploadPercentage === 100 && (
              <div className="alert alert-success" role="alert">
                Files have been uploaded!
              </div>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FileUploadUI;
