/** @format */

import { useRouter } from 'next/router';
/**
 * A react component that displays Software Title Form Header with a link to go back to the previous page
 *
 * @component
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
