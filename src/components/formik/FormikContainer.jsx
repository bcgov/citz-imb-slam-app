import { useState } from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { BackButton, SaveCancelButtons } from 'components';
import { Form, Formik } from 'formik';
import { useForm } from 'hooks';
import { FormikControls } from './inputs/FormikControls';
import { useRouter } from 'next/router';

export const FormikContainer = (props) => {
	const { formTitle = '', formFields = [], isNew = true, dataHook } = props;

	const [editMode, setEditMode] = useState(isNew);

	const route = useRouter();

	const {
		initialValues,
		validationSchema,
		transformedFields,
		create,
		update,
		remove,
	} = useForm(formFields, dataHook);

	const submitHandler = (body) => {
		if (isNew) {
			create(body);
		} else {
			update(body);
		}
	};

	const deleteHandler = async () => {
		await remove(initialValues.id);
		route.back();
	};

	const editHandler = () => {
		setEditMode((mode) => !mode);
	};

	return (
		<>
			<Stack direction={'row'} justifyContent='space-between' marginBottom={2}>
				<BackButton />
				{editMode ? null : (
					<Stack direction={'row'} justifyContent='flex-end' spacing={2}>
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
					</Stack>
				)}
			</Stack>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={submitHandler}>
				{(props) => {
					// console.log('props', props);
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
									{transformedFields.map((transformedField, key) => {
										const { breakPoints, ...field } = transformedField;
										if (field.control === 'hidden')
											return <FormikControls {...field} key={key} />;
										return (
											<Grid key={key} item {...breakPoints}>
												<FormikControls disabled={!editMode} {...field} />
											</Grid>
										);
									})}
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
