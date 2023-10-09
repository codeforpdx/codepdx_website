import Hero from "../components/home/Hero";
import About from "../components/home/About";
import VolunteerBrief from "../components/home/VolunteerBrief";
import Events from "../components/home/Events";
import ProjectsBrief from "../components/home/ProjectsBrief";
import Partners from "../components/home/partners/Partners";

const Home = () => {
  // any logic needed
  return (
    <>
      <Hero />
      <About />
      <VolunteerBrief />
      <Events />
      <ProjectsBrief />
      <Partners />
    </>
  );
};

export default Home;
