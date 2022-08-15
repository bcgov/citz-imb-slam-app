import { Stack } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { Theme } from '../style/Theme';
import { DefaultButton } from './templates/DefaultButton';
import { MutedButton } from './templates/MutedButton';

export const SaveCancelButtons = (props) => {
  const { resetForm, editHandler, ShowSaveButton = true } = props;

  const router = useRouter();

  const backHandler = useCallback(() => {
    const { href } = window.location;
    router.push(href.substring(0, href.lastIndexOf('/')));
  }, [resetForm, router]);

  const cancelHandler = useCallback(() => {
    editHandler();
    resetForm();
  }, [resetForm, router]);

  if (ShowSaveButton) {
    return (
      <ThemeProvider theme={Theme}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ margin: '25px 0px 15px' }}
        >
          <MutedButton id="cancel" onClick={cancelHandler}>
            Cancel
          </MutedButton>
          <DefaultButton type="submit" id="save">
            Save
          </DefaultButton>
        </Stack>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={Theme}>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ margin: '25px 0px 15px' }}
      >
        <MutedButton id="cancel" onClick={backHandler}>
          Back
        </MutedButton>
      </Stack>
    </ThemeProvider>
  );
};
