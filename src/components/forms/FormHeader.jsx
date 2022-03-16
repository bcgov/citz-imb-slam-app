import { Button } from 'components/buttons/Button';
import { useRouter } from 'next/router';
/**
 *
 * @param {*} param0
 * @returns {React.jsx}
 */
export const FormHeader = ({
	linkText = 'Back',
	linkURL = '/',
	setReadOnly,
	readOnly,
	onDelete,
	formik,
}) => {
	const router = useRouter();

	return (
		<div className='app-header flex-row'>
			<div className='flex-large'>
				<div className='block-title'>
					<a onClick={() => router.push(linkURL)}>{linkText}</a>
				</div>
			</div>
			<div className='flex-large'>
				<div className='button-group-edit'>
					{readOnly ? (
						<>
							<Button theme='muted warning' onClick={() => onDelete(formik)}>
								Delete
							</Button>
							<Button theme='default' onClick={() => setReadOnly(!readOnly)}>
								Edit
							</Button>
						</>
					) : null}
				</div>
			</div>
		</div>
	);
};
