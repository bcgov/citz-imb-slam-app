import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button, IconButton } from '@mui/material';
import { TableContainer } from 'components';
import { useSoftware } from 'hooks';
import { useRouter } from 'next/router';

import { authenticate } from 'helpers';
export const getServerSideProps = (context) => {
	return authenticate(context);
};

export const Software = () => {
	const router = useRouter();

	const tableActions = (
		<Button className="btn btn-default" href='/software/add'>
			+ Add Software
		</Button>
	);

	return (
		<TableContainer
			title={'Software'}
			dataHook={useSoftware}
			tableActions={tableActions}
			sortOrder={'asc'}
			sortBy={'title'}
			height={80}
		/>
	);
};

export default Software;
