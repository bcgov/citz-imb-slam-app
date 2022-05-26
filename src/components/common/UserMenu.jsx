import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Logout from "@mui/icons-material/Logout";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import {
	Button,
	ListItemIcon,
	Menu,
	MenuItem,
	Typography
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useAuth } from "hooks";
import { useMemo, useState } from "react";
import { Theme } from "../style/Theme";
import { Avatar } from "./Avatar";

export const UserMenu = () => {
  const { isAuthenticated, user, signIn, signOut } = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!isAuthenticated)
    return (
      <ThemeProvider theme={Theme}>
        <Button
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            signIn('github');
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
    <>
      <ThemeProvider theme={Theme}>
        <Button
          onClick={handleClick}
          endIcon={
            <KeyboardArrowDownIcon
              sx={{
                color: "primary.text",
                fontWeight: 400,
              }}
            />
          }
          sx={{
            color: "primary.text",
            "&:hover": {
              color: "primary.main",
              bgcolor: "secondary.bg",
            },
            textTransform: "none",
          }}
        >
          <Avatar
            title={user.name}
            sx={{ textTransfrom: "none", fontSize: "0.95rem" }}
            size={34}
            image={user.image}
          />
          <Typography
            sx={{
              textTransfrom: "none",
              fontSize: "0.95rem",
              paddingLeft: "10px",
            }}
          >
            {user.name}
          </Typography>
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem>
            <ListItemIcon sx={{ minWidth: "26px!important" }}>
              <PermIdentityIcon
                sx={{ fontSize: "0.95rem", color: "primary.text" }}
              />
            </ListItemIcon>
            <Typography sx={{ fontSize: "0.9rem" }}>My Profile</Typography>
          </MenuItem>
          <MenuItem
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            <ListItemIcon sx={{ minWidth: "26px!important" }}>
              <Logout sx={{ fontSize: "0.95rem", color: "primary.text" }} />
            </ListItemIcon>
            <Typography sx={{ fontSize: "0.9rem" }}>Sign Out</Typography>
          </MenuItem>
        </Menu>
      </ThemeProvider>
    </>
  );
};
