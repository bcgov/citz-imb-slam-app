import { Button } from 'components';
import { Field, Form, Formik } from 'formik';
import { useLicensees } from 'hooks';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import * as Yup from 'yup';
import { FormHeader } from './FormHeader';
import { TextInput } from './inputs';

/**
 *
 * @param {*} props
 * @returns {React.jsx}
 */
export const LicenseeForm = (props) => {
	const {
		initialValues = {
			id: 'temp',
			name: '',
		},
		editMode = false,
	} = props;
	const [readOnly, setReadOnly] = useState(!editMode);
	const router = useRouter();
	const { create, update, remove } = useLicensees();

	const onSubmit = async (body, onSubmitProps) => {
		onSubmitProps.setSubmitting(false);
		if (editMode) {
			create(body);
		} else {
			update(body);
		}

		onSubmitProps.resetForm();
		router.push('/licensees');
	};

	const onCancel = useCallback(
		(onCancelProps) => {
			onCancelProps.resetForm();
			router.push('/licensees');
		},
		[router],
	);

	const onDelete = useCallback(
		(formik) => {
			remove(formik.values);
			formik.resetForm();
			router.push('/licensees');
		},
		[remove, router],
	);

	const validationSchema = Yup.object({
		name: Yup.string().required('Name is required'),
	});

	return (
		<div className='app'>
			<Formik
				enableReinitialize={true}
				initialValues={initialValues}
				validationSchema={validationSchema}
				validateOnChange={true}
				validateOnBlur={false}
				onSubmit={onSubmit}>
				{(formik) => (
					<>
						<FormHeader
							linkText={'Back to Licensee List'}
							linkURL={'/licensees'}
							readOnly={readOnly}
							setReadOnly={setReadOnly}
							onDelete={onDelete}
							formik={formik}
						/>

						<Form className='software'>
							<div className='flex-row'>
								<div className='flex-large'>
									{editMode ? (
										<h1 className='form-title'>Add Licensee</h1>
									) : readOnly ? (
										<h1 className='form-title'>View Licensee</h1>
									) : (
										<h1 className='form-title'>Update Licensee</h1>
									)}
								</div>
							</div>
							<div>
								<Field name='id' type='hidden' />
							</div>
							<div className='flex-row'>
								<TextInput
									label='Licensee Name'
									id='name'
									name='name'
									required={true}
									readOnly={readOnly}
								/>
							</div>
							<div className='flex-row'>
								<div className='flex-large button-group'>
									<Button theme='muted' onClick={() => onCancel(formik)}>
										Cancel
									</Button>
									{readOnly ? null : (
										<Button
											theme='default'
											type='submit'
											disabled={!formik.isValid}>
											Save
										</Button>
									)}
								</div>
							</div>
						</Form>
					</>
				)}
			</Formik>
		</div>
	);
};
