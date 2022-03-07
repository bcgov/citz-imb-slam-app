import { useRouter } from 'next/router';
/**
 *
 * @param {*} param0
 * @returns {React.jsx}
 */
export const FormHeader = ({ linkText = 'Back' }) => {
	const router = useRouter();

	return (
		<div className='app-header'>
			<div className='block-title'>
				<a onClick={() => router.back()}>{linkText}</a>
			</div>
		</div>
	);
};
