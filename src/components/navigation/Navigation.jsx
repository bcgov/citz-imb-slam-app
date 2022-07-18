import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
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
          <Toolbar className="toolbar" sx={{ maxWidth: '1536px', margin: 0 }}>
            <Typography
              component="div"
              sx={{
                color: 'primary.text',
                flexGrow: 1,
              }}
            >
              <Button
                component="div"
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{
                  color: 'primary.text',
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'secondary.bg',
                  },
                  '&:click': {
                    color: 'primary.main',
                  },
                  textTransform: 'capitalize',
                }}
                onClick={() => router.push('/')}
              >
                <Image
                  src={slamlogo}
                  className="nav-logo-main"
                  alt="BC GOV Logo"
                  width={40}
                  height={40}
                />
                <Typography
                  sx={{
                    marginLeft: '.5rem',
                    fontSize: '1rem',
                    fontWeight: 500,
                  }}
                >
                  License Management
                </Typography>
              </Button>
            </Typography>
            <NavigationLinks />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
