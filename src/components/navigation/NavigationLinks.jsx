import { Button, Stack, Typography } from "@mui/material";
import { UserMenu } from "components";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Theme } from "../style/Theme";

export const NavigationLinks = () => {
  const router = useRouter();
  const { status } = useSession();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#5B7CFD",
        text: "#222222",
      },
      secondary: {
        main: "#fff",
        bg: "#fff",
      },
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      fontWeight: 400,
    },
  });

  return (
    <ThemeProvider theme={Theme}>
      <Stack direction="row" spacing={2}>
        {status === "authenticated" && (
          <>
            <Button
              sx={{
                color: "primary.text",
                "&:hover": {
                  color: "primary.main",
                  bgcolor: "secondary.bg",
                },
                textTransform: "none",
              }}
              onClick={() => router.push("/software")}
            >
              <Typography sx={{ textTransfrom: "none", fontSize: "0.95rem" }}>
                Software
              </Typography>
            </Button>
            <Button
              sx={{
                color: "primary.text",
                "&:hover": {
                  color: "primary.main",
                  bgcolor: "secondary.bg",
                },
                textTransform: "none",
              }}
              onClick={() => router.push("/licensees")}
            >
              <Typography sx={{ textTransfrom: "none", fontSize: "0.95rem" }}>
                Licensees
              </Typography>
            </Button>
            <Button
              sx={{
                color: "primary.text",
                "&:hover": {
                  color: "primary.main",
                  bgcolor: "secondary.bg",
                },
                textTransform: "none",
              }}
              onClick={() => router.push("/contact")}
            >
              <Typography sx={{ textTransfrom: "none", fontSize: "0.95rem" }}>
                Contact
              </Typography>
            </Button>
          </>
        )}
        <UserMenu />
      </Stack>
    </ThemeProvider>
  );
};
