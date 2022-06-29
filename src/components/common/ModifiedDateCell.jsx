import { Typography } from '@mui/material';
import { DateTime, utcInstance } from 'luxon';
import { useEffect, useState } from 'react';

const MINUTES = 60;
const HOURS = 24;
const SECONDS = 60;
const DAYS = 28;

export const ModifiedCell = ({ value }) => {

  // Date is changed from UTC to PST then formated to ISO
  const modifiedDate = (value.row.modified).replace('Z', "+07:00");
  const date = (DateTime.fromISO(modifiedDate));

  function timeDifference(time, interval){
    return Math.abs((time.diff(DateTime.now())).as(interval));
  }

  const [modified, setModified] = useState({
    text: '',
    color: '#222',
    fontWeight: 400,
  });

  useEffect(() => {
    if (timeDifference(date, 'seconds') < SECONDS) {
        setModified({ text: Math.round(timeDifference(date, 'seconds')) + ' seconds ago' })

    } else if (timeDifference(date, 'minutes') < MINUTES) {
        setModified({ text: Math.round(timeDifference(date, 'minutes')) + ' minutes ago' })

    } else if (timeDifference(date, 'hours') < HOURS) {
        setModified({ text: Math.round(timeDifference(date, 'hours')) + ' hours ago' })

    } else if (timeDifference(date, 'days') < DAYS) {
        setModified({ text: Math.round(timeDifference(date, 'days')) + ' days ago' })

    } else {
      setModified({text:date.setLocale('en-ca').toLocaleString()})

    }
    return () => {};
  }, []);

  if (!value) return null;

  return (
    <Typography
      sx={{
        backgroundColor: 'none',
        color: { ...modified },
        fontWeight: { ...modified},
      }}
      variant="span"
      // icon={false}
    >
      {modified.text}
    </Typography>
  );
};
