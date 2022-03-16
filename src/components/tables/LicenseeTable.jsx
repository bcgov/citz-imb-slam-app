import { useMemo, useCallback } from 'react';
import { TableGrid } from './common/TableGrid';
import { TableHeader } from './common/TableHeader';
import { useLicensees } from 'hooks';
import { useRouter } from 'next/router';
/**
 * Presents a table with all the Licensees listed.
 * @returns {React.jsx}
 */
export const LicenseeTable = () => {
	const columns = [
		{ field: 'id', headerName: 'ID', width: 300 },
		{ field: 'name', headerName: 'Licensee', width: 250 },

	];

	const { data, isLoading, isError } = useLicensees();
	const rows = useMemo(() => {
		if (isLoading || isError) {
			return [];
		}

		return data;
	}, [data, isLoading, isError]);

	const router = useRouter();

	const onRowClick = useCallback(
		(props) => {
			router.push(`/licensees/${props.id}`);
		},
		[router],
	);

	return (
		<div className='app'>
			<TableHeader title={'Licensees'} buttonText={'+ Add Licensee'} buttonLink={'/licensees/create'} />
			<div className='app-body'>
				<TableGrid
					listName={'licensee'}
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
