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
            variant="body1"
            sx={{ mt: 2, color: '#2C3E50', cursor: 'pointer' }}
            onClick={handleFooterClick}
          >
            &#169; 2025 Owen Edwards. All rights reserved.
          </Typography>
          <Typography
            variant="caption"
            sx={{ mt: 1, display: 'block', color: '#2C3E50' }}
          >
            Built with{' '}
            <span style={{ color: '#61DAFB', fontWeight: 'bold' }}>React</span>{' '}
            and{' '}
            <span style={{ color: '#3178C6', fontWeight: 'bold' }}>TypeScript</span>{' '}
            by Owen Edwards.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}
