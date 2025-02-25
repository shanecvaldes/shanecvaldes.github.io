import * as React from 'react';
import { AppBar, IconButton, Typography, Container, Grid2 } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import { Link, useNavigate } from 'react-router-dom';

const pages = ['Home', 'About', 'Academics', 'Professional', 'Gallery'];

export default function Footer() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNav = (target) => {
    navigate(`/${target.toLowerCase()}`); // Navigate to the clicked page
    handleCloseNavMenu(); // Close the menu after clicking
  };

  const navHandshake = () => {
    window.open('https://missouristate.joinhandshake.com/profiles/nxmjhn', '_blank').focus();
  }
  const navLinkedin = () => {
    window.open('https://www.linkedin.com/in/shane-valdes-6406a8275/', '_blank').focus();
  }
  const navGithub = () => {
    window.open('https://github.com/shanecvaldes?ocid=AID2202669_SEM_5c18130c773f16aeeb80700a2a40c4dd:G:s', '_blank').focus();
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Grid2 container>
            <Grid2 size={6}
            alignItems="center">
                <Container alignItems="center">
                    <Typography
                        class='typography-base'
                        variant='h2'>
                        Contact Me
                    </Typography>
                    <Typography>
                        <PhoneIcon /> 314-541-1874
                    </Typography>
                    <Typography>
                        <EmailIcon /> shane.valdes11@gmail.com
                    </Typography>
                    <Typography>
                        <EmailIcon /> scv566s@missouristate.edu
                    </Typography>
                </Container>
            </Grid2>
            <Grid2 size={6}>
                <Typography
                  class='typography-base'
                  variant='h2'>
                    Social Accounts
                </Typography>
                <IconButton
                    size={"large"}
                    onClick={navHandshake}>
                        <img src="/socials/handshake-logo.png"
                        style={{ width: 100, height: 100, borderRadius: "15%" }} />
                </IconButton>
                <IconButton
                    size={"large"}
                    onClick={navLinkedin}>
                        <img src="/socials/linkedin_logo.png"
                        style={{ width: 100, height: 100, borderRadius: "15%" }} />
                </IconButton>
                <IconButton
                    size={"large"}
                    onClick={navGithub}>
                        <img src="/socials/github_logo.png"
                        style={{ width: 100, height: 100, borderRadius: "15%"}} />
                </IconButton>
            </Grid2>
        </Grid2>
      </Container>
    </AppBar>
  );
}
