import { FormikContainer } from 'components';
import { useFakeDataHook } from '../../hooks/useFakeDataHook';

export const formiktest = () => {
	return (
		<FormikContainer
			formTitle={'Formik Test'}
			dataHook={useFakeDataHook}
			isNew={false}
		/>
	);
};

export default formiktest;
