import { Button, Stack, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { UserMenu } from './UserMenu';
import { useAuth } from '../../hooks';
import { Theme } from '../style/Theme';

export const NavigationLinks = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const { asPath } = useRouter();

  return (
    <ThemeProvider theme={Theme}>
      <Stack direction="row" spacing={2}>
        {isAuthenticated && (
          <>
            <Button
              sx={{
                color: 'primary.text',
                '&:hover': {
                  color: 'primary.main',
                  bgcolor: 'secondary.bg',
                },
                textTransform: 'none',
              }}
              onClick={
                asPath === '/software'
                  ? () => router.reload()
                  : () => router.push('/software')
              }
            >
              <Typography sx={{ textTransfrom: 'none', fontSize: '0.95rem' }}>
                Software
              </Typography>
            </Button>
            <Button
              sx={{
                color: 'primary.text',
                '&:hover': {
                  color: 'primary.main',
                  bgcolor: 'secondary.bg',
                },
                textTransform: 'none',
              }}
              onClick={
                asPath === '/licensees'
                  ? () => router.reload()
                  : () => router.push('/licensees')
              }
            >
              <Typography sx={{ textTransfrom: 'none', fontSize: '0.95rem' }}>
                Licensees
              </Typography>
            </Button>
          </>
        )}
        <UserMenu />
      </Stack>
    </ThemeProvider>
  );
};
