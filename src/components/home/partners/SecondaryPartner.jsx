import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const secondaryPartnerList = [
  {
    company: 'blah blah',
    testamonial:
      'CODEPDXs exceptional team embodies talent and dedication, working relentlessly to enhance the lives of vulnerable citizens. Their innovative approach to utilizing technology for social betterment is truly remarkable.  - Wilfred Pinfold, President of OpenCommons'
  },
  {
    company: 'ORDSN',
    testamonial:
      'By harnessing the diverse talents and enthusiasm of both tech-savvy and non-tech individuals, CODEPDX is carving a pathway to a more vibrant and inclusive Portland. Code for PDX exemplifies the very essence of what collaborative endeavors like ours at ORDSN aim to achieve. Siva Narendra, Co-Founder ORDSN Digital vaults are essential components of the future stack that every individual needs to control their lives in our modern economy.CODE PDXs focus on this exemplifies their understanding of what is most important for the vulnerable in our society. The remarkable team at Code for PDX should be applauded for their energy and vision. Carol Coye Benson, Co-Founder ORDSN'
  }
];

const displaySecondaryPartners = ({ company, testamonial }) => {
  const partnerGridStyle = {
    xs: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <Grid
      sx={{
        background:
          'linear-gradient(180deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)',
        borderRadius: '40px',
        minHeight: '500px'
        // use this transform for every other
        //   transform: 'rotate(180deg)'
      }}
      container
      xs={12}
      direction={'row'}
      key={company}
    >
      <Grid {...partnerGridStyle}>
        <Box></Box>
        <Typography variant="body1" pb={'6%'}>
          <strong>{company}</strong>
        </Typography>
      </Grid>
      <Grid {...partnerGridStyle}>
        <Typography variant="body1" display={'flex'} pr={'15%'}>
          {testamonial}
        </Typography>
      </Grid>
    </Grid>
  );
};
const SecondaryPartner = () => {
  return <Container>{secondaryPartnerList.map(displaySecondaryPartners)}</Container>;
};

export default SecondaryPartner;
