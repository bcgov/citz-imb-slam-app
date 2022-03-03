/** @format */

import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import * as Yup from 'yup';
import { createData } from '../../api';
import { FormButton, TextInput } from '../../common';
import { useSoftware } from '../../hooks';

export const SoftwareForm = (props) => {
	const { initialValues = { title: '', publisher: '', administrator: '' } } =
		props;

	const router = useRouter();
	const { create } = useSoftware();

	const onSubmit = async (body, onSubmitProps) => {
		console.log('body', body);
		onSubmitProps.setSubmitting(false);
		create(body);
		onSubmitProps.resetForm();
		router.push('/');
	};

	const onCancel = useCallback((onCancelProps) => {
		console.log('onCancelProps', onCancelProps);
		onCancelProps.resetForm();
	}, []);

	const validationSchema = Yup.object({
		title: Yup.string().required('Required'),
	});

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}>
			{(formik) => (
				<Form className='software'>
					<div className='flex-row'>
						<div className='flex-large'>
							<h1 className='form-title'>Add Software</h1>
						</div>
					</div>
					<div className='flex-row'>
						<TextInput
							label='Software Title'
							id='title'
							name='title'
							required={true}
						/>
						<TextInput label='Publisher' id='publisher' name='publisher' />
					</div>
					<div className='flex-row'>
						<TextInput
							label='Licence Administrator'
							id='administrator'
							name='administrator'
						/>
					</div>
					<div className='flex-row'>
						<div className='flex-large button-group'>
							<FormButton theme='muted' onClick={() => onCancel(formik)}>
								Cancel
							</FormButton>
							<FormButton
								theme='default'
								type='submit'
								disabled={!(formik.dirty && formik.isValid)}>
								Save
							</FormButton>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
};
