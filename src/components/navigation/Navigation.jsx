import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import slamlogo from "assets/images/slam-logo.png";
import { UserMenu } from "components";
import Image from "next/image";
import { useRouter } from "next/router";
import { React } from "react";
import { NavigationLinks } from "./NavigationLinks";

/**
 *
 * @returns {React.jsx}
 */
export const Navigation = () => {
  const router = useRouter();

  return (
    <Box sx={{ flexGrow: 1, boxShadow: 3 }}>
      <AppBar sx={{ bgcolor: "#ffffff" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => router.push("/")}
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
            variant="h6"
            component="div"
            sx={{ color: "text.primary", flexGrow: 1 }}
          >
            License Management
          </Typography>
          <NavigationLinks />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
