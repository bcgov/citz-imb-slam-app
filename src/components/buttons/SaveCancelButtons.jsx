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

  const clickHandler = useCallback(() => {
    resetForm();
    editHandler();
    router.push(window.location.href);
  }, [resetForm, router]);

  if (ShowSaveButton)
    return (
      <ThemeProvider theme={Theme}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ margin: '25px 0px 15px' }}
        >
          <MutedButton id="cancel" onClick={clickHandler}>
            Cancel
          </MutedButton>
          <DefaultButton type="submit" id="save">
            Save
          </DefaultButton>
        </Stack>
      </ThemeProvider>
    );
  else return null;
};
