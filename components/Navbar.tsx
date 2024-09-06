import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Link from 'next/link';

export default function Navbar(): JSX.Element {
  return (
    <AppBar position="fixed" sx={{ bgcolor: '#34495E', boxShadow: 3, top: 0, left: 0, right: 0 }}>
      <Toolbar>
        <Container>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            <Link href="/" passHref>
              <Button 
                sx={{ 
                  mx: 1, 
                  color: '#ECF0F1',
                  '&:hover': {
                    backgroundColor: '#2C3E50',
                  },
                  textTransform: 'none',
                }}
              >
                About Me
              </Button>
            </Link>
            <Link href="#experience" passHref>
              <Button 
                sx={{ 
                  mx: 1, 
                  color: '#ECF0F1',
                  '&:hover': {
                    backgroundColor: '#2C3E50',
                  },
                  textTransform: 'none',
                }}
              >
                Experience
              </Button>
            </Link>
            <Link href="#education" passHref>
              <Button 
                sx={{ 
                  mx: 1, 
                  color: '#ECF0F1',
                  '&:hover': {
                    backgroundColor: '#2C3E50',
                  },
                  textTransform: 'none',
                }}
              >
                Education
              </Button>
            </Link>
            <Link href="#projects" passHref>
              <Button 
                sx={{ 
                  mx: 1, 
                  color: '#ECF0F1',
                  '&:hover': {
                    backgroundColor: '#2C3E50',
                  },
                  textTransform: 'none',
                }}
              >
                Projects
              </Button>
            </Link>
            <Link href="#contact" passHref>
              <Button 
                sx={{ 
                  mx: 1, 
                  color: '#ECF0F1',
                  '&:hover': {
                    backgroundColor: '#2C3E50',
                  },
                  textTransform: 'none',
                }}
              >
                Contact Me
              </Button>
            </Link>
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
