// React Imports
import { useState } from 'react';
// Material UI Imports
import { Container } from '@mui/material';
// Component Imports
import Hero from '../components/global/Hero/Hero';
import About from '../components/home/About';
import VolunteerBrief from '../components/home/VolunteerBrief';
import Events from '../components/home/Events';
import ProjectsBrief from '../components/home/ProjectsBrief';
import Partners from '../components/home/partners/Partners';
import ContactFormModal from '../components/global/ContactFormModal';

const Home = () => {
  const [showContactFormModal, setShowContactFormModal] = useState(false);

  const handleContactForm = () => {
    setShowContactFormModal(!showContactFormModal);
  };

  return (
    <>
      <Hero
        pageName={'home'}
        heroImage={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/assets/stJohnsBridge.png)`}
        heroText={`Bridging Technology and Civil Services`}
      />
      <Container maxWidth="xl">
        <About />
        <VolunteerBrief
          showContactFormModal={showContactFormModal}
          setShowContactFormModal={setShowContactFormModal}
          handleContactForm={handleContactForm}
        />
        <Events />
        <ProjectsBrief />
        <Partners
          showContactFormModal={showContactFormModal}
          setShowContactFormModal={setShowContactFormModal}
          handleContactForm={handleContactForm}
        />
      </Container>
      <button onClick={handleContactForm}>Click me</button>
      <ContactFormModal
        showContactFormModal={showContactFormModal}
        setShowContactFormModal={setShowContactFormModal}
        handleContactForm={handleContactForm}
      />
    </>
  );
};

export default Home;
