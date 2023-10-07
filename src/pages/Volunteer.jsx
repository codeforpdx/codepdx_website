import Typography from "@mui/material/Typography";
import Hero from "../components/home/Hero";
import Steps from "../components/volunteer/Steps";

const Volunteer = () => {
  // any logic needed
  return (
    // either make Hero reusable somehow (and move it to components/global)
    // or use <Box component="img" />
    <>
      <Hero />
      {/* or <Box component="img" /> */}
      <Typography />
      <Steps />
    </>
  );
};

export default Volunteer;
