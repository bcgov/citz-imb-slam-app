/** @format */

import { SoftwareForm } from 'components';
import { useSoftware } from 'hooks';
import { useRouter } from 'next/router';
import React from 'react';

export default function SoftwareFormRead() {
	const router = useRouter();

	const { id } = router.query;
	const { data } = useSoftware(id);

	return <SoftwareForm id={id} initialValues={data} />;
}
