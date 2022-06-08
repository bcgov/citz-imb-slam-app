import { FormControl, FormHelperText, Typography, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from '../../style/Theme';

export const BaseControl = (props) => {
  const { children, required, label, helperText, error, breakPoints } = props;

  return (
    <ThemeProvider theme={Theme}>
      <Grid
        item
        {...breakPoints}
        sx={{
          marginBottom: '16px',
		  paddingLeft: '8px',
		  paddingRight: '16px',
        }}
      >
        <FormControl fullWidth={true} error={error}>
          <Typography
            component="label"
            sx={{
              color: 'primary.text',
              fontWeight: '600',
              fontSize: '0.9rem',
              marginBottom: '4px',
            }}
          >
            {label}
            {required ? (
              <Typography component="span" sx={{ color: 'error.main' }}>
                *
              </Typography>
            ) : null}
          </Typography>
          {children}
          <FormHelperText className="form-error">{helperText}</FormHelperText>
        </FormControl>
      </Grid>
    </ThemeProvider>
  );
};
