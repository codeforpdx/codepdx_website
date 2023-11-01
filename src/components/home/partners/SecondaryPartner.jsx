import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const secondaryPartnerList = [
  {
    company: 'Open Commons',
    testimonial:
      'CODEPDXs exceptional team embodies talent and dedication, working relentlessly to enhance the lives of vulnerable citizens. Their innovative approach to utilizing technology for social betterment is truly remarkable.  - Wilfred Pinfold, President of OpenCommons',

    partnerLogo: '/assets/openCommonsLogo.png'
  },
  {
    company: 'ORDSN',
    testimonial:
      'By harnessing the diverse talents and enthusiasm of both tech-savvy and non-tech individuals, CODEPDX is carving a pathway to a more vibrant and inclusive Portland. Code for PDX exemplifies the very essence of what collaborative endeavors like ours at ORDSN aim to achieve. Siva Narendra, Co-Founder ORDSN Digital vaults are essential components of the future stack that every individual needs to control their lives in our modern economy.CODE PDXs focus on this exemplifies their understanding of what is most important for the vulnerable in our society. The remarkable team at Code for PDX should be applauded for their energy and vision. Carol Coye Benson, Co-Founder ORDSN',
    partnerLogo: '/assets/ordsnLogo.png'
  },
  {
    company: 'Epicodus',
    testimonial:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat saepe possimus ex dolor deleniti excepturi alias, est in tempore similique, inventore doloribus voluptatibus voluptate. Reiciendis minima nihil et dicta.',
    partnerLogo: ''
  }
];

const partnerGridStyle = {
  xs: 6,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const displaySecondaryPartners = ({ index, company, testimonial, partnerLogo }) => {
  const gradientStyle =
    index % 2 === 0
      ? 'linear-gradient(90deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)'
      : 'linear-gradient(270deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)';

  return (
    <Grid
      sx={{
        background: gradientStyle,
        borderRadius: '40px',
        minHeight: '500px',
        marginBottom: '150px'
      }}
      container
      xs={12}
      key={company}
    >
      <Grid item {...partnerGridStyle}>
        <Box
          component={'img'}
          alt={`${company} logo`}
          aria-label={`${partnerLogo} logo`}
          src={partnerLogo}
          mb={'80px'}
          width={'250px'}
        ></Box>
      </Grid>
      <Grid item {...partnerGridStyle}>
        <Typography variant="body1" display={'flex'} pr={'15%'}>
          {testimonial}
        </Typography>
      </Grid>
    </Grid>
  );
};

const SecondaryPartner = () => {
  return (
    <Container>
      {secondaryPartnerList.map((partner, index) =>
        displaySecondaryPartners({ ...partner, index })
      )}
    </Container>
  );
};

export default SecondaryPartner;
