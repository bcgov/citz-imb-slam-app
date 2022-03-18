import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';
import { useLicensees } from 'hooks';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { AvatarTitle } from './common/AvatarTitle';
import { TableGrid } from './common/TableGrid';
import { TableHeader } from './common/TableHeader';

/**
 * Presents a table with all the Licensees listed.
 * @returns {React.jsx}
 */
export const LicenseeTable = () => {
	const columns = [
		// { field: 'id', headerName: 'ID', width: 300 },
		{
			field: 'name',
			headerName: 'Licensee',
			width: 250,
			renderCell: (params) => <AvatarTitle title={params.value} />,
		},
		{
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
		},
	];

	const { data, isLoading, isError } = useLicensees();
	const rows = useMemo(() => {
		if (isLoading || isError) {
			return [];
		}

		return data;
	}, [data, isLoading, isError]);

	const router = useRouter();

	const onDetailsClick = useCallback(
		(id) => {
			router.push(`/licensees/${id}`);
		},
		[router],
	);

	return (
		<div className='app'>
			<TableHeader
				title={'Licensees'}
				buttonText={'+ Add Licensee'}
				buttonLink={'/licensees/create'}
			/>
			<div className='app-body'>
				<TableGrid
					listName={'licensee'}
					columns={columns}
					rows={rows}
					isError={isError}
					isLoading={isLoading}
				/>
			</div>
		</div>
	);
};
