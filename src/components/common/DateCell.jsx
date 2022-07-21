import { Typography } from '@mui/material';
import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';

const DAYS_BEFORE_EXPIRATION_WARNING = 90;

export const DateCell = ({ value }) => {
  let date = DateTime.fromISO(value);

  if (value != null) {
    date = DateTime.fromISO(value.replace('Z', ''));
  }

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

  return (
    <Typography
      sx={{
        backgroundColor: 'none',
        color: { ...severity },
        fontWeight: { ...severity },
      }}
      variant="span"
      // icon={false}
    >
      {date.setLocale('en-ca').toLocaleString()}
    </Typography>
  );
};
