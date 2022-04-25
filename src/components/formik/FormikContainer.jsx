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
	Typography,
} from '@mui/material';
import { SaveCancelButtons } from 'components';
import { Form, Formik } from 'formik';
import { useForm } from 'hooks';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FormHeader } from './common/FormHeader';
import { FormikControls } from './common/FormikControls';

export const FormikContainer = (props) => {
  const { formTitle = "", isNew = true, dataHook, id } = props;

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

	const confirmationDialogClose = (event) => {
		if (event.target.id === 'delete') deleteHandler();
		setConfirmationDialogOpen(false);
	};

	if (isError) {
		return (
			<Alert severity='error'>
				<AlertTitle>Error</AlertTitle>
				there was an error
			</Alert>
		);
	}

  let size = 12
  if (id && formTitle == 'licensee') {
	  size = 6
  }
	
  if (isError) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        there was an error
      </Alert>
    );
  }

	return (
		<>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={submitHandler}>
				{(props) => {
					const { resetForm, handleReset } = props;
					return (
						<>
							<FormHeader>
								{editMode ? null : (
									<>
										<Button
											id='delete'
											onClick={() => setConfirmationDialogOpen(true)}
											variant='outlined'
											color='warning'>
											Delete
										</Button>
										<Button id='edit' onClick={editHandler} variant='contained'>
											Edit
										</Button>
									</>
								)}
							</FormHeader>
							<Form>
								<Typography variant='h3'>{formTitle}</Typography>
								<Box sx={{ flexGrow: 1 }}>
									<Grid
										container
										spacing={2}
										direction='row'
										justifyContent='flex-start'
										alignItems='flex-start'>
										{formFields.map((formField, key) => (
											<FormikControls
												key={key}
												disabled={!editMode}
												{...formField}
											/>
										))}
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
				<DialogTitle id='alert-dialog-title'>Delete?</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						Are You Sure?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={confirmationDialogClose} id='delete'>
						Delete
					</Button>
					<Button onClick={confirmationDialogClose} id='cancel'>
						Cancel
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
