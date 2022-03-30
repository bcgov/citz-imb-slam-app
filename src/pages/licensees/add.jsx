import { FormikContainer } from 'components';
import { useLicensees } from 'hooks';

export default function LicenseeFormCreate() {
	return (
		<FormikContainer
			formTitle='Add Licensee'
			dataHook={useLicensees}
			isNew={true}
		/>
	);
}
