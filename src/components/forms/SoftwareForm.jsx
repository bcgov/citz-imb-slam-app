import { Field, Form, Formik } from 'formik';
import { useSoftware } from 'hooks';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import * as Yup from 'yup';
import { Button } from 'components';
import { FormHeader } from './FormHeader';
import { TextInput, NumberInput } from './inputs';
import { DateInput, TextArea } from './inputs';
import { AvatarTitle } from 'components/tables/common/AvatarTitle';

/**
 *
 * @param {*} props
 * @returns {React.jsx}
 */
export const SoftwareForm = (props) => {
	const {
		initialValues = {
			id: 'temp',
			title: '',
			publisher: '',
			administrator: '',
			quantity: 0,
			renewal: '',
		},
		editMode = false,
	} = props;
	const [readOnly, setReadOnly] = useState(!editMode);
	const router = useRouter();
	const { create, update, remove } = useSoftware();

	const onSubmit = async (body, onSubmitProps) => {
		onSubmitProps.setSubmitting(false);
		console.log('editMode', editMode)
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
			onCancelProps.resetForm();
			router.push('/');
		},
		[router],
	);

	const onDelete = useCallback(
		(formik) => {
			remove(formik.values);
			formik.resetForm();
			router.push('/');
		},
		[remove, router],
	);

	const validationSchema = Yup.object({
		title: Yup.string().required('Software Title is required'),
		renewal: Yup.date('date must be after today').min(new Date().toDateString())
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
							linkText={'Back to Software List'}
							linkURL={'/'}
							readOnly={readOnly}
							setReadOnly={setReadOnly}
							onDelete={onDelete}
							formik={formik}
						/>

						<Form className='app-body'>
							<div className='flex-row'>
								<div className='flex-large'>
									{editMode ? (
										<h1 className='form-title'>Add Software</h1>
									) : readOnly ? (
										<h1 className='form-title'>View Software</h1>
									) : (
										<h1 className='form-title'>Update Software</h1>
									)}
								</div>
							</div>
							<div>
								<Field name='id' type='hidden' />
								<AvatarTitle title={formik.values.title} />
							</div>
							<div className='flex-row'>
								<TextInput
									label='Software Title'
									id='title'
									name='title'
									type='text'
									required={true}
									readOnly={readOnly}
								/>
							</div>
							<div className='flex-row'>
								<TextInput
									label='Publisher'
									id='publisher'
									name='publisher'
									type='text'
									readOnly={readOnly}
								/>
								<TextInput
									label='Renewal Date'
									id='renewal'
									name='renewal'
									type='date'
									readOnly={readOnly}
								/>
							</div>
							<div className='flex-row'>
								<TextInput
									label='Quantity'
									id='quantity'
									name='quantity'
									type='number'
									readOnly={readOnly}
								/>
								<TextInput
									label='Licence Administrator'
									id='administrator'
									name='administrator'
									type='text'
									readOnly={readOnly}
								/>
							</div>
							<div className='flex-row'>
								<TextArea
									label='Notes'
									id='notes'
									name='notes'
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
