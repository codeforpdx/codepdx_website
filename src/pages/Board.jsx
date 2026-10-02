// Material UI Imports
import { Container } from '@mui/material';
// Component Imports
import Hero from '../components/global/Hero/Hero';
import BoardDisplay from '../components/board/BoardDisplay';

const Board = () => {
  return (
    <>
      <Hero
        pageName={'board'}
        heroImage={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/assets/heroImages/st-johns-bridge-1200x654.webp)`}
        mobileHeroImage={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/assets/heroImages/st-johns-bridge-800x436.webp)`}
        heroText={`Lorem ipsum dolor sit amet consetetur adipiscing`}
      />
      <Container maxWidth="xl">
      <BoardDisplay /> 
      </Container>
    </>
  );
};

export default Board;
