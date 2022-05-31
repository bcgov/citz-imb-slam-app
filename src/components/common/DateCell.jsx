import { Alert } from '@mui/material';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';

const DAYS_BEFORE_EXPIRATION_WARNING = 90;

export const DateCell = ({ value }) => {
	const date = DateTime.fromISO(value);

	const [severity, setSeverity] = useState({
		icon: false,
		severity: 'success',
	});

	useEffect(() => {
		if (date.diff(DateTime.now()).as('days') < DAYS_BEFORE_EXPIRATION_WARNING)
			setSeverity({ severity: 'error' });
		return () => {};
	}, []);

	if (!value) return null;

	return (
		<Alert icon={false} {...severity}>{date.setLocale('en-ca').toLocaleString()}</Alert>
	);
};
