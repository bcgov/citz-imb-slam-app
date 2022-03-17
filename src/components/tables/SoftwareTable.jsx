import { useMemo, useCallback } from 'react';
import { TableGrid } from './common/TableGrid';
import { TableHeader } from './common/TableHeader';
import { useSoftware } from 'hooks';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { QuantityAssigned } from './common/QuantityAssigned';
import { Button } from 'components';
import { UserSearchDialog } from 'components/forms/UserSearchDialog';
import { IconButton, Stack } from '@mui/material';
import MoreIcon from '@mui/icons-material/More';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

/**
 * Presents a table with all the Software Titles listed.
 * @returns {React.jsx}
 */
export const SoftwareTable = () => {
	const columns = [
		{ field: 'title', headerName: 'Software Title', width: 250 },
		{ field: 'publisher', headerName: 'Publisher', width: 200 },
		{
			field: 'renewal',
			headerName: 'Renewal Date',
			type: 'date',
			width: 200,
			valueFormatter: (params) =>
				new Date(params.value).toISOString().split('T')[0].replace(/ /g, '-'),
			cellClassName: (params) =>
				clsx('cell-render', {
					warning:
						new Date(params.value) <
						new Date().setDate(new Date().getDate() + 30),
				}),
		},
		{
			field: 'quantity',
			headerName: 'Quantity',
			width: 150,
			renderCell: (params) => {
				return (
					<QuantityAssigned
						assigned={params.row.__licenseeConnection__.length}
						available={params.row.quantity}
					/>
				);
			},
		},
		{
			field: 'administrator',
			headerName: 'Licence Administrator',
			width: 200,
		},
		{
			field: 'notes',
			headerName: 'Notes',
			width: 300,
		},
		{
			field: 'actions',
			headerName: 'Actions',
			width: 150,
			renderCell: (params) => {
				return (
					<Stack direction={'row'} spacing={0}>
						<IconButton
							color='primary'
							aria-label='go to details'
							onClick={()=>onDetailsClick(params.row.id)}>
							<MoreIcon />
						</IconButton>
						<UserSearchDialog id={params.row.id} />
					</Stack>
				);
			},
		},
	];

	const { data, isLoading, isError } = useSoftware();
	const rows = useMemo(() => {
		if (isLoading || isError) {
			return [];
		}

		return data;
	}, [data, isLoading, isError]);

	const router = useRouter();

	const onDetailsClick = useCallback(
		(id) => {
			router.push(`/software/${id}`);
		},
		[router],
	);

	return (
		<div className='app'>
			<TableHeader
				title={'Software List'}
				buttonText={'+ Add Software'}
				buttonLink={'/software/create'}
			/>
			<div className='app-body'>
				<TableGrid
					listName={'software'}
					columns={columns}
					rows={rows}
					isError={isError}
					isLoading={isLoading}
				/>
			</div>
		</div>
	);
};
