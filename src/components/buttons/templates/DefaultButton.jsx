import { Button } from '@mui/material';
import { Theme } from '../../style/Theme';
import { ThemeProvider } from '@mui/material/styles';

export const DefaultButton = ({ buttonURL, buttonText, onClick, type}) => {
    return (
      <ThemeProvider theme={Theme}>
        <Button
          sx={{
            alignSelf: 'center',
            textAlign: 'center',
            backgroundColor: 'primary.main',
            borderColor: 'primary.main',
            border: '1px solid',
            color: 'primary.bg',
            minHeight: '50px',
            fontFamily: 'fontFamily',
            fontWeoight: '400',
            fontSize: '0.75rem',
            boxShadow: 'none',
            transition: 'all 200ms linear',
            borderRadius: '4px',
            minWidth: '100px',
            letterSpacing: '1px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 20px',
            cursor: 'pointer',
            outline: '0',
            textTransform: 'capitalize',
            '&:hover, &:active, &:focus': {
              color: 'button.text',
              bgcolor: 'hover.bg',
            },
          }}
          href={buttonURL}
          onClick={onClick}
          type={type}
        >
          {buttonText}
        </Button>
      </ThemeProvider>
    );
  };
