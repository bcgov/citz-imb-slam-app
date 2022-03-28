import { FormikContainer } from 'components';
import { fields, fakeHook } from './formiktest-fields.js';

export const formiktest = () => {
	return (
		<FormikContainer
			formTitle={'Formik Test'}
			formFields={fields}
			dataHook={fakeHook}
			isNew={false}
		/>
	);
};

export default formiktest;
