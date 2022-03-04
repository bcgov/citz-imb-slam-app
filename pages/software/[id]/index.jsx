/** @format */

import React from 'react';
import { FormHeader } from '../../../components/layout/header/FormHeader';
import { Navigation } from '../../../components/layout/header/Navigation';
import { SoftwareForm } from '../../../components/layout/form/SoftwareForm';
import { useRouter } from 'next/router';
import { useSoftware } from '../../../components/hooks';

export default function SoftwareFormRead() {
	const router = useRouter();

	const { id } = router.query;
	const { data } = useSoftware(id);

	return (
		<>
			<Navigation />
			<div className='app'>
				<FormHeader linkText={'Back'} />
				<SoftwareForm id={id} initialValues={data} />
			</div>
		</>
	);
}
