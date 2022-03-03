/** @format */

import { Navigation } from '../components/layout/header/Navigation';

import { SoftwareTable } from '../components/layout/table/SoftwareTable';

export default function Home() {
	return (
		<>
			<Navigation />
			<div className='app'>
				<SoftwareTable />
			</div>
		</>
	);
}
