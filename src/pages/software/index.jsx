import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button, IconButton } from '@mui/material';
import { TableContainer } from 'components';
import { useSoftware } from 'hooks';
import { useRouter } from 'next/router';

export const Software = () => {
	const router = useRouter();

	const actionColumn = {
		field: 'actions',
		headerName: 'Actions',
		width: 150,
		renderCell: (params) => {
			return (
				<IconButton
					color='primary'
					aria-label='go to details'
					onClick={() => router.push(`/software/${params.row.id}`)}>
					<MoreHorizIcon color='action' />
				</IconButton>
			);
		},
	};

	const tableActions = (
		<Button variant='contained' href='/software/add'>
			+ Add Software
		</Button>
	);

	return (
		<TableContainer
			title={'Software'}
			dataHook={useSoftware}
			actionColumn={actionColumn}
			tableActions={tableActions}
		/>
	);
};

export default Software;
