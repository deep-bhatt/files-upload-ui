import './App.css';
import FileUploadUI from './components/FileUploadUI';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewUploads from './components/ViewUploads';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FileUploadUI />} />
        <Route path="/view-uploads" element={<ViewUploads />} />
      </Routes>
    </Router>
  );
};

export default App;
