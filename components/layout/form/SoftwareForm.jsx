/** @format */

import { updateA } from '@fluentui/react';
import { Form, Formik, Field } from 'formik';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import * as Yup from 'yup';
import { FormButton, TextInput } from '../../common';
import { useSoftware } from '../../hooks';

export const SoftwareForm = (props) => {
	const {
		initialValues = { id: 'temp', title: '', publisher: '', administrator: '' },
		editMode = false,
	} = props;

	const [readOnly, setReadOnly] = useState(!editMode);
	const router = useRouter();
	const { create, update } = useSoftware();

	const onSubmit = async (body, onSubmitProps) => {
		onSubmitProps.setSubmitting(false);
		if (editMode) {
			create(body);
		} else {
			update(body);
		}

		onSubmitProps.resetForm();
		router.push('/');
	};

	const onCancel = useCallback(
		(onCancelProps) => {
			console.log('onCancelProps', onCancelProps);
			onCancelProps.resetForm();
			router.push('/');
		},
		[router],
	);

	const validationSchema = Yup.object({
		title: Yup.string().required('Required'),
	});

	return (
		<Formik
			enableReinitialize={true}
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
					<div>
						<Field name='id' type='hidden' />
					</div>
					<div className='flex-row'>
						<TextInput
							label='Software Title'
							id='title'
							name='title'
							required={true}
							readOnly={readOnly}
						/>
						<TextInput
							label='Publisher'
							id='publisher'
							name='publisher'
							readOnly={readOnly}
						/>
					</div>
					<div className='flex-row'>
						<TextInput
							label='Licence Administrator'
							id='administrator'
							name='administrator'
							readOnly={readOnly}
						/>
					</div>
					<div className='flex-row'>
						<div className='flex-large button-group'>
							<FormButton theme='muted' onClick={() => onCancel(formik)}>
								Cancel
							</FormButton>
							{readOnly ? (
								<FormButton
									theme='default'
									onClick={() => setReadOnly(!readOnly)}>
									Edit Software Title
								</FormButton>
							) : (
								<FormButton
									theme='default'
									type='submit'
									disabled={!(formik.dirty && formik.isValid)}>
									Save
								</FormButton>
							)}
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
};
