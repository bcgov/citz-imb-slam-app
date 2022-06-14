import { Stack, Typography } from '@mui/material';

export const FormHeader = ({ children, formTitle }) => (
  <Stack
    direction="row"
    justifyContent="space-between"
    paddingTop={2}
    marginBottom={2}
  >
    <Stack direction="row" justifyContent="flex-end" spacing={2}>
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
        {formTitle}
      </Typography>
    </Stack>
    <Stack direction="row" justifyContent="flex-end" spacing={2}>
      {children}
    </Stack>
  </Stack>
);
