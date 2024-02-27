import './App.css';
import FileUploadUI from './components/FileUploadUI';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FileBrowser from './components/FileBrowser';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FileUploadUI />} />
        <Route path="/view-uploads" element={<FileBrowser />} />
      </Routes>
    </Router>
  );
};

export default App;
