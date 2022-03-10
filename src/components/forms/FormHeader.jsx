import { useRouter } from 'next/router';
import { Button } from 'components/buttons/Button'
import { useState } from 'react';
/**
 *
 * @param {*} param0
 * @returns {React.jsx}
 */
export const FormHeader = ({linkText, linkURL}) => {
	const router = useRouter();

	return (
		<div className='app-header flex-row'>
			<div className='flex-large'>
				<div className='block-title'>
					<a onClick={() => router.push('/')}>{linkText}</a>
				</div>
			</div>
			<div className='flex-large'>
				<div className="button-group-edit">
						<Button theme='muted warning' onClick={() => onDelete(formik)}>
							Delete
						</Button>
						<Button theme='default' onClick={() => setReadOnly(!readOnly)}>
						Edit
						</Button>
				</div>
			</div>
		</div>
	);
};
