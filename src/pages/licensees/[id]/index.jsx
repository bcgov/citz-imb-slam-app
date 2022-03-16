/** @format */

import { LicenseeForm } from 'components';
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
	const { data = [] } = useLicensees(id);

	return <LicenseeForm id={id} initialValues={data[0]} />;
}
