/** @format */

import { useSoftware } from 'hooks';
import { useRouter } from 'next/router';
import { FormikContainer } from 'components';


/**
 * present the software form in read mode (initially) for a specific software title
 * can be turned to edit mode
 * @returns {React.jsx}
 */
export default function SoftwareFormRead() {
	const router = useRouter();

	const { id } = router.query;

	return (
		<>
		<FormikContainer
			formTitle='Software'
			dataHook={useSoftware}
			id={id}
			isNew={false}
		/>
		</>
	);
}
