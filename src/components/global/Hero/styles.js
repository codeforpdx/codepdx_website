export const heroStyles = {
  heroBackground: {
    width: '100%',
    height: { xs: '35vh', md: '70vh' },
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  heroContainer: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'flex-start',
    alignItems: { xs: 'center', md: 'flex-start' },
    width: { xs: '100%', md: '575px' },
    height: '100%'
  },
  heroContainerAlt: {
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%'
  },
  heroRightAlign: {
    justifyContent: { xs: 'center', md: 'flex-end' }
  },
  heroCenterAlign: {
    justifyContent: 'center'
  },
  homeH1: {
    color: '#ffff',
    textShadow: '0px 4px 4px #0000004D',
    lineHeight: { xs: '45px', md: '80px' },
    flexBasis: { xs: '100px', md: '160px' },
    fontSize: { xs: '30px', md: '56px' },
    pt: { xs: '25px', md: '113px' },
    pl: { xs: 0, md: '56px' },
    width: { xs: '80%', md: '100%' },
    textAlign: 'center'
  },
  projectsH1: {
    color: '#ffff',
    textShadow: '0px 4px 4px #0000004D',
    fontSize: { xs: '22px', md: '3vw' },
    pr: { xs: '0', sm: '5%' },
    width: { xs: '80%', md: '40%' },
    height: { xs: '50%', md: '50%' },
    textAlign: { xs: 'center', md: 'left' }
  },
  volunteerH1: {
    color: '#ffff',
    textShadow: '0px 4px 4px #0000004D',
    fontSize: { xs: '22px', md: '3vw' },
    width: '80%',
    height: '60%',
    textAlign: 'center'
  }
};
