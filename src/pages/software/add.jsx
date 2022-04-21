/** @format */

import { FormikContainer } from 'components';
import { useSoftware } from 'hooks';
import { authenticate } from 'helpers';
export const getServerSideProps = (context) => {
	return authenticate(context);
};

/**
 * present the software form in create mode
 * @returns {React.jsx}
 */
export default function SoftwareFormCreate() {
	return (
		<FormikContainer
			formTitle='Software'
			dataHook={useSoftware}
			isNew={true}
		/>
	);
}
