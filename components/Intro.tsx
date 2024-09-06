import { Box, Typography, Avatar } from '@mui/material';

export default function Intro(): JSX.Element {
  return (
    <Box sx={{ textAlign: 'center', mb: 5 }}>
      <Avatar
        alt="Owen Edwards"
        src="/personal-image.jpg"
        sx={{
          width: 150,
          height: 150,
          margin: 'auto',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1)', // Slight zoom on hover
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)', // Adding shadow on hover
          },
        }}
      />
      <Typography variant="h4" component="h1" sx={{ mt: 2 }}>
        Owen Edwards
      </Typography>
      <Typography variant="h6" component="h2" color="textSecondary" sx={{ mt: 1 }}>
        Full-Stack &amp; Mobile Software Engineer
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        &quot;Building innovative, user-centric applications to drive the future of technology.&quot;
      </Typography>
    </Box>
  );
}
