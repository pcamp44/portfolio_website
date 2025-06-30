import { BrowserRouter, Routes, Route} from 'react-router-dom';
// Components
import NavComponent from './components/NavComponent.jsx';
import Footer from './components/Footer.jsx';
// Pages
import Home from "./pages/Home.js";
import Gallery from "./pages/Gallery.js";
import Resume from "./pages/Resume.js";
import ProjectsPage from './pages/ProjectsPage.js';
import ProjectDetailPage from './pages/ProjectDetailPage.js';
// Stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projectPage" element={<ProjectsPage />} />
          <Route path="/project" element={<ProjectDetailPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      {/* Footer & Contact */}
      <Footer />
    </BrowserRouter>
  );
}