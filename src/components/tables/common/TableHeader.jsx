import Link from 'next/link';
/**
 *
 * @param {*} props
 * @returns {React.jsx}
 */
export const TableHeader = (props) => {
	const { title, buttonText } = props;
	return (
		<div className='app-header'>
			<div className='block-title'>
				<h1>{title}</h1>
			</div>
			<div className='block-button'>
				<Link href='/software/create' passHref>
					<a className='btn btn-default'>{buttonText}</a>
				</Link>
			</div>
		</div>
	);
};
