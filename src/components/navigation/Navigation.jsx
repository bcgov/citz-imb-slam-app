import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { React } from 'react';
import slamlogo from '../../assets/images/slam-logo.png';
import { Theme } from '../style/Theme';
import { NavigationLinks } from './NavigationLinks';

/**
 *
 * @returns {React.jsx}
 */
export const Navigation = () => {
  const router = useRouter();

  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{
            bgcolor: '#ffffff',
            borderBottom: '1px solid #ddd',
            display: 'block',
            boxShadow: 'none',
          }}
        >
          <Toolbar
            className="toolbar"
            sx={{ maxWidth: '1536px', margin: 'auto' }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
              onClick={() => router.push('/')}
            >
              <Image
                src={slamlogo}
                className="nav-logo-main"
                alt="BC GOV Logo"
                width={40}
                height={40}
              />
            </IconButton>
            <Typography
              component="div"
              sx={{
                color: 'primary.text',
                '&:hover': {
                  color: 'primary.main',
                  bgcolor: 'secondary.bg',
                },
                flexGrow: 1,
                fontSize: '1rem',
                fontWeight: 500,
                textTransform: 'none',
              }}
            >
              License Management
            </Typography>
            <NavigationLinks />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
