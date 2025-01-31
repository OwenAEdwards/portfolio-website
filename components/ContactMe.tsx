import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';

export default function ContactMe(): JSX.Element {
  return (
    <Container component="section" sx={{ my: 5 }}>
      <Typography variant="h2" component="h2" align="center" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 3 }}>
        Feel free to reach out to me through the following methods:
      </Typography>
      <Box sx={{ backgroundColor: '#f5f5f5', p: 3, borderRadius: 2 }}>
        <Box sx={{ py: 2 }}>
          <MuiLink
            href="mailto:edwardoa@mail.uc.edu"
            color="inherit"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.3s ease, transform 0.3s ease',
              '&:hover': {
                color: '#3498db', // Change color on hover
                transform: 'scale(1.05)', // Slight zoom on hover
              },
            }}
          >
            <Email sx={{ mr: 1 }} /> Email me
          </MuiLink>
        </Box>
        <Box sx={{ py: 2 }}>
          <MuiLink
            href="https://www.linkedin.com/in/edwardoa/"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.3s ease, transform 0.3s ease',
              '&:hover': {
                color: '#3498db', // Change color on hover
                transform: 'scale(1.05)', // Slight zoom on hover
              },
            }}
          >
            <LinkedIn sx={{ mr: 1 }} /> Connect with me on LinkedIn
          </MuiLink>
        </Box>
        <Box sx={{ py: 2 }}>
          <MuiLink
            href="https://github.com/OwenAEdwards"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.3s ease, transform 0.3s ease',
              '&:hover': {
                color: '#3498db', // Change color on hover
                transform: 'scale(1.05)', // Slight zoom on hover
              },
            }}
          >
            <GitHub sx={{ mr: 1 }} /> Follow me on GitHub
          </MuiLink>
        </Box>
      </Box>
    </Container>
  );
}
