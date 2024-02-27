import React, { useState } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap'; // Ensure Button is imported if not already
import FolderView from './FolderView';
import ImageView from './ImageView';
import './FileBrowser.css'; // Import the CSS file for styling

const files = {
  'images': ['images/dog1.png', 'images/cat.jpeg'],
  'food': ['food/pizza.png', 'food/apple.png'],
};

const FileBrowser = () => {
  const [currentFolder, setCurrentFolder] = useState(null);
  const [viewingImage, setViewingImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(-1);

  const openFolder = folderName => {
    setCurrentFolder(folderName);
  };

  const viewImage = (image, index) => {
    setViewingImage(image);
    setImageIndex(index);
  };

  const nextImage = () => {
    const newIndex = (imageIndex + 1) % files[currentFolder].length;
    viewImage(files[currentFolder][newIndex], newIndex);
  };

  const previousImage = () => {
    const newIndex = (imageIndex - 1 + files[currentFolder].length) % files[currentFolder].length;
    viewImage(files[currentFolder][newIndex], newIndex);
  };

  return (
    <Container>
      {!currentFolder && <FolderView folders={files} onFolderSelect={openFolder} />}
      {currentFolder && (
        <div className="file-view-container">
          <Button variant="primary" className="mb-3 mt-2" onClick={() => setCurrentFolder(null)}>Go Back</Button>
          <ListGroup>
            {files[currentFolder].map((file, index) => (
              <ListGroup.Item key={index} action onClick={() => viewImage(file, index)} className="file-item">
                {file.split('/').pop()}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )}
      <ImageView
        show={!!viewingImage}
        onHide={() => setViewingImage(null)}
        image={viewingImage}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </Container>
  );
};

export default FileBrowser;
