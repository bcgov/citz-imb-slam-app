import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Stack,
} from '@mui/material';
import { DefaultButton, SaveCancelButtons, WarningButton } from 'components';
import { Form, Formik } from 'formik';
import { useForm } from 'hooks';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FormHeader } from './common/FormHeader';
import { FormikControls } from './common/FormikControls';

export const FormikContainer = (props) => {
  const { formTitle = '', isNew = true, dataHook, id } = props;

  const [editMode, setEditMode] = useState(isNew);
  const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false);

  // pop up menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

  const deleteHandler = async () => {
    if (confirmationDialogClose) remove({ id: initialValues.id });
    route.back();
  };

  const editHandler = () => {
    setEditMode((mode) => !mode);
  };

  const confirmationDialogClose = (event) => {
    if (event.target.id === 'delete') deleteHandler();
    setConfirmationDialogOpen(false);
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
      >
        {(props) => {
          const { resetForm, handleReset } = props;
          return (
            <>
              <FormHeader formTitle={formTitle}>
                {editMode ? null : (
                  <>
                    <WarningButton
                      id="delete"
                      onClick={() => setConfirmationDialogOpen(true)}
                      buttonText="Delete"
                    />
                    <DefaultButton
                      id="edit"
                      onClick={editHandler}
                      buttonText="Edit"
                    />
                  </>
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
                          .map((formField, key) => (
                            <FormikControls
                              key={key}
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
                            .map((formField, key) => (
                              <FormikControls
                                key={key}
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
                  />
                </Box>
              </Form>
            </>
          );
        }}
      </Formik>
      <Dialog open={confirmationDialogOpen} onClose={confirmationDialogClose}>
        <DialogTitle id="alert-dialog-title">Delete?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are You Sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={confirmationDialogClose} id="delete">
            Delete
          </Button>
          <Button onClick={confirmationDialogClose} id="cancel">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
