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
  Typography,
} from "@mui/material";
import { SaveCancelButtons } from "components";
import { Form, Formik } from "formik";
import { useForm } from "hooks";
import { useRouter } from "next/router";
import { useState } from "react";
import { FormHeader } from "./common/FormHeader";
import { FormikControls } from "./common/FormikControls";


export const FormikContainer = (props) => {
  const { formTitle = "", isNew = true, dataHook, id } = props;

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
    if (confirmationDialogClose) await remove({ id: initialValues.id });
    route.back();
  };

  const editHandler = () => {
    setEditMode((mode) => !mode);
  };

  const confirmationDialogClose = (event) => {
    if (event.target.id === "delete") deleteHandler();
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

  if (isLoading) return null

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
                    <Button
                      id="delete"
                      onClick={() => setConfirmationDialogOpen(true)}
                      className="btn btn-muted warning"
                    >
                      Delete
                    </Button>
                    <Button
                      id="edit"
                      onClick={editHandler}
                      className="btn btn-default"
                    >
                      Edit
                    </Button>
                  </>
                )}
              </FormHeader>
              <Form>
                <Box sx={{ flexGrow: 1 }}>
                  <Stack direction="row" spacing={2}>
                    <Grid
                      container
                      spacing={2}
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      lg={formColumns ===2 ? (6) : 12 }
                      className="form-field"
                    >
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
                    {formColumns === 2 ? (
                      <Grid
                        container
                        spacing={2}
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        className="form-field"
                        lg={6}
                      >
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
                    ) : null}
                  </Stack>
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
