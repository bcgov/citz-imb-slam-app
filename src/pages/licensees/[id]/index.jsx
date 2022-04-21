/** @format */
import { FormikContainer } from 'components';
import { useLicensees } from 'hooks';
import { useRouter } from 'next/router';
import { authenticate } from 'helpers';
export const getServerSideProps = (context) => {
	return authenticate(context);
};

/**
 * present the licensee form in read mode (initially) for a specific licensee
 * can be turned to edit mode
 * @returns {React.jsx}
 */
export default function LicenceeForm() {
	const router = useRouter();

	const { id } = router.query;

	return (
		<>
			<FormikContainer
				formTitle='Licensee'
				dataHook={useLicensees}
				id={id}
				isNew={false}
			/>
		</>
	);
}
