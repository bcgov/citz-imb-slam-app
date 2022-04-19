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
			tableActions={tableActions}
			sortOrder={'asc'}
			sortBy={'name'}
			height={58}
		/>
	);
}
