import { useMemo, useCallback } from 'react';
import { TableGrid } from './common/TableGrid';
import { TableHeader } from './common/TableHeader';
import { useSoftware } from 'hooks';
import { useRouter } from 'next/router';
import clsx from 'clsx';
/**
 *
 * @returns {React.jsx}
 */
export const SoftwareTable = () => {

	const columns = [
		// { field: 'id', headerName: 'ID', width: 275 },
		{ field: 'title', headerName: 'Software Title', width: 250 },
		{ field: 'publisher', headerName: 'Publisher', width: 200 },
		{
			field: 'renewal',
			headerName: 'Renewal Date',
			type: 'date',
			width: 200,
			valueFormatter: (params) => new Date(params.value).toISOString().split('T')[0].replace(/ /g, '-'),
			cellClassName: (params) =>
			clsx('cell-render', {
			  warning: new Date(params.value) < new Date().setDate(new Date().getDate() + 30),
			}),
		},
		{
			field: 'quantity',
			headerName: 'Quantity',
			width: 150,
		},
		{
			field: 'administrator',
			headerName: 'Licence Administrator',
			width: 200,
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

	const onRowClick = useCallback(
		(props) => {
			router.push(`/software/${props.id}`);
		},
		[router],
	);

	return (
		<div className='app'>
			<TableHeader title={'Software List'} buttonText={'+ Add Software'} />
			<div className='app-body'>
				<TableGrid
					listName={'software'}
					columns={columns}
					rows={rows}
					onRowClick={onRowClick}
					isError={isError}
					isLoading={isLoading}
				/>
			</div>
		</div>
	);
};
