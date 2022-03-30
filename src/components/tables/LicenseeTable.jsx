import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';
import { useLicensees } from 'hooks';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { AvatarChip } from 'components';
import { TableGrid } from './common/TableGrid';
import { TableHeader } from './common/TableHeader';

import { Chip } from '@mui/material';

/**
 * Presents a table with all the Licensees listed.
 * @returns {React.jsx}
 */
export const LicenseeTable = () => {
	const router = useRouter();

	const columns = [
		// { field: 'id', headerName: 'ID', width: 300 },
		{
			field: 'name',
			headerName: 'Licensee',
			width: 250,
			// renderCell: (params) => <AvatarChip title={params.value} />,
		},
		{
			field: 'software',
			headerName: 'Software',
			width: 450,
			sortable: false,
			hideSortIcons: true,
			filterable: false,
			groupable: false,
			renderCell: (params) => {
				/*
					MUI DataGrid expects params.value to be number, object, string, or boolean, but we pass in an array
					this generates an error in the console, but does not hinder rendering the page
					for now, we will ignore the error until we can find a way to either fix it, or that MUI changes it
				*/
				return (
					<>
						{params.value.map(({ value, id }) => (
							<Chip label={value} key={id} />
						))}
					</>
				);
			},
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
						onClick={() => router.push(`/licensees/${params.row.id}`)}>
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

	return (
		<div className='app'>
			<TableHeader
				title={'Licensees'}
				buttonText={'+ Add Licensee'}
				buttonLink={'/licensees/add'}
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
