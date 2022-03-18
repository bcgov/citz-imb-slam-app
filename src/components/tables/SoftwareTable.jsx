import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';
import clsx from 'clsx';
import { useSoftware } from 'hooks';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { AvatarTitle } from './common/AvatarTitle';
import { QuantityAssigned } from './common/QuantityAssigned';
import { TableGrid } from './common/TableGrid';
import { TableHeader } from './common/TableHeader';

/**
 * Presents a table with all the Software Titles listed.
 * @returns {React.jsx}
 */
export const SoftwareTable = () => {
	const columns = [
		// { field: 'id', headerName: 'ID', width: 300 },
		{
			field: 'title',
			headerName: 'Software Title',
			width: 250,
			renderCell: (params) => <AvatarTitle title={params.value} />,
		},
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
			renderCell: (params) => (
				<QuantityAssigned
					assigned={params.row.__licenseeConnection__.length}
					available={params.value}
				/>
			),
		},
		{
			field: 'administrator',
			headerName: 'Licence Administrator',
			width: 200,
		},
		// {
		// 	field: 'notes',
		// 	headerName: 'Notes',
		// 	width: 300,
		// },
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
