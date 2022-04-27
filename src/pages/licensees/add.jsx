import { FormikContainer } from 'components';
import { useLicensees } from 'hooks';
import { authenticate } from 'helpers';
export const getServerSideProps = (context) => {
	return authenticate(context);
};

export default function LicenseeFormCreate() {
	return (
		<FormikContainer
			formTitle='Add Licensee'
			dataHook={useLicensees}
			isNew={true}
		/>
	);
}
