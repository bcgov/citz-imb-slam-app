/* eslint-disable no-nested-ternary */
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import {
  Alert,
  AlertTitle,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { DisabledButton } from '../buttons/templates/DisabledButton';
import { useForm } from '../../hooks';
import { SaveCancelButtons } from '../buttons/SaveCancelButtons';
import { DefaultButton } from '../buttons/templates/DefaultButton';
import { MutedButton } from '../buttons/templates/MutedButton';
import { WarningButton } from '../buttons/templates/WarningButton';
import { Theme } from '../style/Theme';
import { FormHeader } from './common/FormHeader';
import { FormikControls } from './common/FormikControls';

export const FormikContainer = (props) => {
  const { formTitle = '', isNew = true, dataHook, id } = props;
  console.log(dataHook(id).data);

  const [editMode, setEditMode] = useState(isNew);
  const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false);

  const route = useRouter();

  const {
    isLoading,
    isError,
    formFields,
    initialValues,
    validationSchema,
    create,
    update,
    remove,
    formColumns,
  } = useForm(dataHook, id);

  const submitHandler = async (body, formik) => {
    if (isNew) {
      await create(body);
    } else {
      await update(body);
    }
    formik.resetForm();
    route.back();
  };

  const confirmationDialogClose = (event) => {
    if (event.target.id === 'delete') {
      remove({ id: initialValues.id });
      route.back();
    }
    setConfirmationDialogOpen(false);
  };

  const editHandler = () => {
    setEditMode((mode) => !mode);
  };

  if (isError) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        there was an error
      </Alert>
    );
  }

  if (isLoading) return null;

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
        enableReinitialize
      >
        {(formikProps) => {
          const { resetForm } = formikProps;
          return (
            <>
              <FormHeader formTitle={formTitle}>
                {dataHook(id).data.__licenseeConnection__ === undefined ||
                dataHook(id).data.__licenseeConnection__.length === 0 ||
                dataHook(id).data.quantity === undefined ? (
                  <WarningButton
                    id="delete"
                    onClick={() => setConfirmationDialogOpen(true)}
                  >
                    Delete
                  </WarningButton>
                ) : (
                  <DisabledButton id="delete">Delete</DisabledButton>
                )}
                {editMode ? null : (
                  <DefaultButton id="edit" onClick={editHandler}>
                    Edit
                  </DefaultButton>
                )}
              </FormHeader>
              <Form
                style={{
                  backgroundColor: '#fff',
                  padding: '2rem 2rem',
                  borderRadius: '5px',
                  boxShadow: 'rgb(149 157 165 / 20%) 0px 8px 24px',
                }}
              >
                <Box sx={{ width: '100%' }}>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={2}
                  >
                    <Grid
                      item
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      xs={formColumns === 2 ? 6 : 12}
                      className="form-field"
                    >
                      <Grid container spacing={2}>
                        {formFields
                          .filter((formField) => formField.column === 0)
                          .map((formField) => (
                            <FormikControls
                              key={formField.name}
                              disabled={!editMode}
                              {...formField}
                            />
                          ))}
                      </Grid>
                    </Grid>
                    {formColumns === 2 ? (
                      <Grid
                        item
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        className="form-field"
                        xs={6}
                      >
                        <Grid container spacing={2}>
                          {formFields
                            .filter((formField) => formField.column === 1)
                            .map((formField) => (
                              <FormikControls
                                key={formField.name}
                                disabled={!editMode}
                                {...formField}
                              />
                            ))}
                        </Grid>
                      </Grid>
                    ) : null}
                  </Grid>
                  <SaveCancelButtons
                    ShowSaveButton={editMode}
                    resetForm={resetForm}
                    editHandler={editHandler}
                  />
                </Box>
              </Form>
            </>
          );
        }}
      </Formik>
      <ThemeProvider theme={Theme}>
        <Dialog
          open={confirmationDialogOpen}
          onClose={confirmationDialogClose}
          PaperProps={{
            style: {
              padding: '30px',
            },
          }}
        >
          <DialogTitle
            id="alert-dialog-title"
            sx={{
              padding: '0px',
              marginTop: '10px',
              marginBottom: '20px',

              lineHeight: '1',
              textAlign: 'center',
            }}
          >
            <WarningAmberIcon
              sx={{
                fontSize: '3rem',
                color: 'primary.warning',
              }}
            />
          </DialogTitle>
          <DialogContent sx={{ padding: '0px', marginBottom: '20px' }}>
            <DialogContentText
              id="alert-dialog-description"
              sx={{ color: '#222' }}
            >
              Are you sure you want to delete this item?
            </DialogContentText>
            <DialogContentText sx={{ color: '#222' }}>
              This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions
            sx={{
              justifyContent: 'space-between',
              padding: '0',
              marginTop: '10px',
            }}
          >
            <MutedButton onClick={confirmationDialogClose}>Cancel</MutedButton>
            <WarningButton id="delete" onClick={confirmationDialogClose}>
              Delete
            </WarningButton>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </>
  );
};
