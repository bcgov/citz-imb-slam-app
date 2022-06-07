import { Button, Stack, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { UserMenu } from "components";
import { useAuth } from "hooks";
import { useRouter } from "next/router";
import { Theme } from "../style/Theme";

export const NavigationLinks = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

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
              onClick={() => router.push('/software')}
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
              onClick={() => router.push('/licensees')}
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
