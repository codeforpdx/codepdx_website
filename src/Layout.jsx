// React Imports
import { Routes, Route } from 'react-router-dom';
// Component Imports
import Footer from './components/global/Footer';
import Home from './pages/Home';
import Navbar from './components/global/Navbar';
import NoPageFound from './pages/NoPageFound';
import Projects from './pages/Projects';
import Volunteer from './pages/Volunteer';
// Props Types
import PropTypes from 'prop-types';

const Layout = ({ darkMode, handleThemeChange }) => {
  return (
    <>
      <Navbar darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};
Layout.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  handleThemeChange: PropTypes.func.isRequired
};
export default Layout;
