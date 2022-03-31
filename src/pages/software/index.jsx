import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button, IconButton } from '@mui/material';
import { TableContainer } from 'components';
import { useSoftware } from 'hooks';

export const Software = () => {
	const actionColumn = {
		field: 'actions',
		headerName: 'Actions',
		width: 150,
		renderCell: (params) => {
			return (
				<IconButton
					color='primary'
					aria-label='go to details'
					onClick={() => onDetailsClick(params.row.id)}>
					<MoreHorizIcon color='action' />
				</IconButton>
			);
		},
	};

	const tableActions = (
		<Button variant='contained' href='/software/create'>
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
