import { Button, Stack, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { UserMenu } from "components";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Theme } from "../style/Theme";

export const NavigationLinks = () => {
  const router = useRouter();
  const { status } = useSession();

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
                display: "none",
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
