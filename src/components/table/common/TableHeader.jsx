import { Stack, Typography } from '@mui/material';
import { Theme } from '../../style/Theme';
import { ThemeProvider } from '@mui/material/styles';

export const TableHeader = ({ children, title }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Stack
        direction={'column'}
        justifyContent="space-between"
        paddingTop={2}
        marginBottom={2}
      >
        <Stack direction={'row'} justifyContent="space-between" spacing={2}>
          <Typography
            variant="h4"
            sx={{
              alignItems: 'center',
              marginBottom: '0px',
              display: 'flex',
              minHeight: '40px',
              fontWeight: '600',
              lineHeight: '1',
              fontFamily: 'fontFamily',
            }}
          >
            {title}
          </Typography>
          <Stack direction={'row'} justifyContent="flex-end" spacing={2}>
            {children}
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};
