import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button, IconButton } from '@mui/material';
import { TableContainer } from 'components';
import { useLicensees } from 'hooks';
import { useRouter } from 'next/router';
/**
 * the Licensee Page
 * @returns {React.jsx}
 */
export default function Licensees() {
	const router = useRouter();

	const actionColumn = {
		// field: 'actions',
		// headerName: 'Actions',
		// width: 150,
		// renderCell: (params) => {
		// 	return (
		// 		<IconButton
		// 			color='primary'
		// 			aria-label='go to details'
		// 			onClick={() => router.push(`/licensees/${params.row.id}`)}>
		// 			<MoreHorizIcon color='action' />
		// 		</IconButton>
		// 	);
		// },
	};

	const tableActions = (
		<Button className="btn btn-default" href='/licensees/add'>
			+ Add Licencee
		</Button>
	);

	return (
		<TableContainer
			title={'Licensees'}
			dataHook={useLicensees}
			route={'licensees'}
			actionColumn={actionColumn}
			tableActions={tableActions}
		/>
	);
}
