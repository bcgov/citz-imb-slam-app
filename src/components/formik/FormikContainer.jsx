import { Box, Grid, Typography } from '@mui/material';
import { BackButton } from 'components';
import { SaveCancelButtons } from 'components/buttons/SaveCancelButtons';
import { Form, Formik } from 'formik';
import { useForm, useSoftware } from 'hooks';
import { FormikControls } from './inputs/FormikControls';

const fakeHook = () => {
	return {
		create: (body) => {
			console.log('create', body);
		},
		update: (body) => {
			console.log('update', body);
		},
	};
};

export const FormikContainer = (props) => {
	const { formTitle = '', formFields = [], isNew = true } = props;

	const { initialValues, validationSchema, transformedFields, create, update } =
		useForm(formFields, fakeHook);

	const submitHandler = (body) => {
		if (isNew) {
			create(body);
		} else {
			update(body);
		}
	};

	return (
		<>
			<BackButton />
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
												<FormikControls {...field} />
											</Grid>
										);
									})}
								</Grid>
								<SaveCancelButtons resetForm={resetForm} />
							</Box>
						</Form>
					);
				}}
			</Formik>
		</>
	);
};
