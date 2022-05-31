import { Stack } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { Theme } from '../../components/style/Theme';
import { DefaultButton } from '../buttons/templates/DefaultButton';
import { MutedButton } from '../buttons/templates/MutedButton';

export const SaveCancelButtons = (props) => {
  const { resetForm, ShowSaveButton = true } = props;

  const router = useRouter();

  const clickHandler = useCallback(() => {
    resetForm();
    router.back();
  }, [resetForm, router]);

  return (
    <ThemeProvider theme={Theme}>
      <Stack
        direction={'row'}
        spacing={2}
        justifyContent={'center'}
        sx={{ margin: '25px 0px 15px' }}
      >
        <MutedButton id="cancel" onClick={clickHandler} buttonText="Cancel" />
        {ShowSaveButton ? <DefaultButton type="submit" id="save" buttonText="Save" /> : null}
      </Stack>
    </ThemeProvider>
  );
};
