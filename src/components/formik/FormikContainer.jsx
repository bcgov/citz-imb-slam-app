import {
	Alert,
	AlertTitle,
	Box,
	Button,
	Grid,
	Typography,
} from '@mui/material';
import { SaveCancelButtons } from 'components';
import { Form, Formik } from 'formik';
import { useForm } from 'hooks';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FormHeader } from './common/FormHeader';
import { FormikControls } from './inputs/FormikControls';

export const FormikContainer = (props) => {
	const { formTitle = '', isNew = true, dataHook, id } = props;

	const [editMode, setEditMode] = useState(isNew);

	const route = useRouter();

	const {
		isLoading,
		isError,
		initialValues,
		validationSchema,
		transformedFields,
		create,
		update,
		remove,
	} = useForm(dataHook, id);

	const submitHandler = async (body) => {
		body.software = body.software.map((software) => {
			return { id: software };
		});

		if (isNew) {
			await create(body);
		} else {
			await update(body);
		}
		route.back();
	};

	const deleteHandler = async () => {
		remove({ id: initialValues.id });
		route.back();
	};

	const editHandler = () => {
		setEditMode((mode) => !mode);
	};

	if (isError) {
		return (
			<Alert severity='error'>
				<AlertTitle>Error</AlertTitle>
				there was an error
			</Alert>
		);
	}

	if (isLoading) return null;

	return (
		<>
			<FormHeader>
				{editMode ? (
					<>
						<Button
							id='delete'
							onClick={deleteHandler}
							variant='outlined'
							color='warning'>
							Delete
						</Button>
						<Button id='edit' onClick={editHandler} variant='contained'>
							Edit
						</Button>
					</>
				) : null}
			</FormHeader>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={submitHandler}>
				{(props) => {
					const { resetForm } = props;
					return (
						<Form>
							<Typography variant='h3'>{formTitle}</Typography>
							<Box sx={{ flexGrow: 1 }}>
								<Grid
									container
									spacing={2}
									direction='row'
									justifyContent='flex-start'
									alignItems='flex-start'>
									{transformedFields.map((transformedField, key) => (
										<FormikControls
											key={key}
											disabled={!editMode}
											{...transformedField}
										/>
									))}
								</Grid>
								<SaveCancelButtons
									ShowSaveButton={editMode}
									resetForm={resetForm}
								/>
							</Box>
						</Form>
					);
				}}
			</Formik>
		</>
	);
};
