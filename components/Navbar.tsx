import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

export default function Navbar(): JSX.Element {
  const handleScroll = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
    event.preventDefault(); // Prevent default anchor behavior
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: '#34495E', boxShadow: 3, top: 0, left: 0, right: 0 }}>
      <Toolbar>
        <Container>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            <Button onClick={(e) => handleScroll(e, 'about-me')} sx={navButtonStyle}>
              About Me
            </Button>
            <Button onClick={(e) => handleScroll(e, 'experience')} sx={navButtonStyle}>
              Experience
            </Button>
            <Button onClick={(e) => handleScroll(e, 'education')} sx={navButtonStyle}>
              Education
            </Button>
            <Button onClick={(e) => handleScroll(e, 'projects')} sx={navButtonStyle}>
              Projects
            </Button>
            <Button onClick={(e) => handleScroll(e, 'testimonials')} sx={navButtonStyle}>
              Testimonials
            </Button>
            <Button onClick={(e) => handleScroll(e, 'contact')} sx={navButtonStyle}>
              Contact Me
            </Button>
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

const navButtonStyle = {
  mx: 1,
  color: '#ECF0F1',
  '&:hover': {
    backgroundColor: '#2C3E50',
  },
  textTransform: 'none',
};