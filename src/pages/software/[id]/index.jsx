/** @format */

import { SoftwareForm } from 'components';
import { useSoftware } from 'hooks';
import { useRouter } from 'next/router';

/**
 * present the software form in read mode (initially) for a specific software title
 * can be turned to edit mode
 * @returns {React.jsx}
 */
export default function SoftwareFormRead() {
	const router = useRouter();

	const { id } = router.query;
	const { data } = useSoftware(id);

	return <SoftwareForm id={id} initialValues={data[0]} />;
}
