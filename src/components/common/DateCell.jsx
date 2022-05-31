import { Alert, Typography } from '@mui/material';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';

const DAYS_BEFORE_EXPIRATION_WARNING = 90;

export const DateCell = ({ value }) => {
  const date = DateTime.fromISO(value);

  const [severity, setSeverity] = useState({
    color: '#222',
	fontWeight: 400,
  });

  useEffect(() => {
    if (date.diff(DateTime.now()).as('days') < DAYS_BEFORE_EXPIRATION_WARNING)
      setSeverity({ color: '#d33c40', fontWeight: 600 });
    return () => {};
  }, []);

  if (!value) return null;

<<<<<<< HEAD
  return (
    <Typography
      sx={{
        backgroundColor: 'none',
        color: { ...severity },
		fontWeight: { ...severity },
      }}
      variant="span"
      icon={false}
    >
      {date.setLocale('en-ca').toLocaleString()}
    </Typography>
  );
=======
	return (
		<Alert icon={false} {...severity}>{date.setLocale('en-ca').toLocaleString()}</Alert>
	);
>>>>>>> c4f42b3 (cleanup)
};
