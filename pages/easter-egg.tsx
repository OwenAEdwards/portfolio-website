import { Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function EasterEgg(): JSX.Element {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/');
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h3" component="h1" sx={{ mb: 3 }}>
        🎉 You&#39;ve Found the Easter Egg! 🎉
      </Typography>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Congratulations on discovering this hidden page! Here’s a little surprise for you.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleBackClick}>
        Back to Home
      </Button>
    </Box>
  );
}
