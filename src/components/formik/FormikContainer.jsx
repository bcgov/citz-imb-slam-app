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
import { FormikControls } from './common/FormikControls';

export const FormikContainer = (props) => {
	const { formTitle = '', isNew = true, dataHook, id } = props;

	const [editMode, setEditMode] = useState(isNew);

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
		formik.resetForm()
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
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={submitHandler}>
			{(props) => {
				const { resetForm, handleReset } = props;
				return (
					<>
						<FormHeader
							formTitle={formTitle}
						>
							{editMode ? null : (
								<>
									<Button
										id='delete'
										onClick={deleteHandler}
										className="btn btn-muted warning"
										>
										Delete
									</Button>
									<Button id='edit' onClick={editHandler} className="btn btn-default">
										Edit
									</Button>
								</>
							)}
						</FormHeader>
						<Form>
							<Box sx={{ flexGrow: 1 }}>
								<Grid
									container
									spacing={2}
									direction='row'
									justifyContent='flex-start'
									alignItems='flex-start'
									className='form-field'
									
									>
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
	);
};
