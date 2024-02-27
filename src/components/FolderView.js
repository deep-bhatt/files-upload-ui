import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import './FolderView.css'; // Make sure to import the CSS file

const FolderView = ({ folders, onFolderSelect }) => {
  return (
    <div className="folder-view-container"> {/* Container to control width and centering */}
      <h3>Select a Folder</h3>
      <ListGroup>
        {Object.keys(folders).map((folderName, index) => (
          <ListGroup.Item key={index} action onClick={() => onFolderSelect(folderName)} className="d-flex align-items-center folder-item">
            <FontAwesomeIcon icon={faFolder} className="me-2" />
            {folderName}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default FolderView;
