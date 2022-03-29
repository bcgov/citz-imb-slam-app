/** @format */
import { FormikContainer } from 'components';
import { useLicensees } from 'hooks';
import { useRouter } from 'next/router';

/**
 * present the licensee form in read mode (initially) for a specific licensee
 * can be turned to edit mode
 * @returns {React.jsx}
 */
export default function LicenceeFormRead() {
	const router = useRouter();

	const { id } = router.query;

	return (
		<FormikContainer
			formTitle='Add Licensee'
			dataHook={useLicensees}
			id={id}
			isNew={true}
		/>
	);
}
