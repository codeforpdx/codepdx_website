// React Imports
import { Routes, Route } from 'react-router-dom';
// Component Imports
import Footer from './components/global/Footer';
import Home from './pages/Home';
import Navbar from './components/global/Navbar';
import NoPageFound from './pages/NoPageFound';
import Projects from './pages/Projects';
import Volunteer from './pages/Volunteer';

const Layout = () => {
  return (
    <>
      <Navbar />
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

export default Layout;
