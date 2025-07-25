import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';
import { initEmailJS } from './services/emailjs';
import { useTheme } from './hooks/useTheme';

function App() {
  // Initialize theme - this ensures the theme hook is used at the app level
  useTheme();
  
  // Initialize EmailJS when app starts
  useEffect(() => {
    initEmailJS();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-sage-50 to-khaki-100 dark:from-ebony-900 dark:to-black_olive-900">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
