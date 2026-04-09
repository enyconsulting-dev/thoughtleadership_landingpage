import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import FreeTrainingPage from './pages/FreeTrainingPage';
import ProgramsPage from './pages/ProgramsPage';
import LivePage from './pages/LivePage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="free-training" element={<FreeTrainingPage />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="live" element={<LivePage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="success-stories" element={<SuccessStoriesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
