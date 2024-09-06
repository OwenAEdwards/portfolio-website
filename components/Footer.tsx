import { Box, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function Footer(): JSX.Element {
  const router = useRouter();

  const handleFooterClick = () => {
    router.push('/easter-egg');
  };

  return (
    <footer>
      <Container sx={{ textAlign: 'center', py: 4 }}>
        <Box sx={{ backgroundColor: '#ECF0F1', p: 3, borderRadius: 2 }}>
          <Typography
            variant="body2"
            sx={{ mt: 2, color: '#2C3E50', cursor: 'pointer' }}
            onClick={handleFooterClick}
          >
            &#169; 2024 Owen Edwards
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}
