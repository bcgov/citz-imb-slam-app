import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Logout from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import {
  Button,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../hooks';
import { Avatar } from '../common/Avatar';
import { Theme } from '../style/Theme';
import { useAPI } from '../../hooks/useAPI/useAPI';

export const UserMenu = () => {
  const { isAuthenticated, user, signIn, signOut } = useAuth();
  const { fetchData } = useAPI();
  const { asPath } = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const getlicenseesID = async () => {
    const url = `licensee?${new URLSearchParams({
      email: user.email,
    })}`;
    const newUrl = url.replace('email=', 'filter=email||$eq||');
    const response = await fetchData(newUrl);
    return response[0].id;
  };

  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const toLicensees = async () => {
    const licenseeID = await getlicenseesID();

    if (asPath === `/licensees/`) {
      router.reload();
    } else {
      router.replace(`/licensees/${licenseeID}`);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const keycloakLogout = () => {
    const colon = window.location.port ? ':' : '';
    const redirectURL = `${window.location.protocol}//${window.location.hostname}${colon}${window.location.port}`;

    // Determine environment for keycloak proxy
    const returnURL = () => {
      const site = window.location.hostname;
      let prefix = '';
      if (site.includes('dev') || site === 'localhost') prefix = 'dev.';
      else if (site.includes('test')) prefix = 'test.';

      return `https://${prefix}loginproxy.gov.bc.ca/auth/realms/standard`;
    };

    // Redirect to keycloak proxy
    window.location.href = `https://logon7.gov.bc.ca/clp-cgi/logoff.cgi?retnow=1&returl=${returnURL()}/protocol/openid-connect/logout?post_logout_redirect_uri=${redirectURL}`;
  };

  if (!isAuthenticated)
    return (
      <ThemeProvider theme={Theme}>
        <Button
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            signIn('keycloak');
          }}
          sx={{
            color: 'primary.text',
            '&:hover': {
              color: 'primary.main',
              bgcolor: 'secondary.bg',
            },
            textTransform: 'none',
          }}
        >
          <Typography sx={{ textTransfrom: 'none', fontSize: '0.95rem' }}>
            Sign In
          </Typography>
        </Button>
      </ThemeProvider>
    );

  return (
    <ThemeProvider theme={Theme}>
      <Button
        onClick={handleClick}
        endIcon={
          <KeyboardArrowDownIcon
            sx={{
              color: 'primary.text',
              fontWeight: 400,
            }}
          />
        }
        sx={{
          color: 'primary.text',
          '&:hover': {
            color: 'primary.main',
            bgcolor: 'secondary.bg',
          },
          textTransform: 'none',
        }}
      >
        <Avatar
          title={user.name}
          sx={{ textTransfrom: 'none', fontSize: '0.95rem' }}
          size={34}
          image={user.image}
        />
        <Typography
          sx={{
            textTransfrom: 'none',
            fontSize: '0.95rem',
            paddingLeft: '10px',
          }}
        >
          {user.name}
        </Typography>
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem
          onClick={(e) => {
            e.preventDefault();
            toLicensees();
            handleClose();
          }}
        >
          <ListItemIcon sx={{ minWidth: '26px!important' }}>
            <PermIdentityIcon
              sx={{ fontSize: '0.95rem', color: 'primary.text' }}
            />
          </ListItemIcon>
          <Typography sx={{ fontSize: '0.9rem' }}>My Profile</Typography>
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            e.preventDefault();
            signOut({ redirect: false });
            keycloakLogout();
          }}
        >
          <ListItemIcon sx={{ minWidth: '26px!important' }}>
            <Logout sx={{ fontSize: '0.95rem', color: 'primary.text' }} />
          </ListItemIcon>
          <Typography sx={{ fontSize: '0.9rem' }}>Sign Out</Typography>
        </MenuItem>
      </Menu>
    </ThemeProvider>
  );
};
