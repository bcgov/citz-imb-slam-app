import { Avatar as MUIAvatar, Typography } from '@mui/material';
import { useMemo } from 'react';

export const Avatar = (props) => {
  const { title, size = 25, image } = props;

  const bgcolor = useMemo(() => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < title.length; i += 1) {
      hash = title.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }, [title]);

  return (
    <MUIAvatar
      src={image}
      alt={title}
      sx={{
        width: size,
        height: size,
        bgcolor,
      }}
    >
      <Typography
        variant="span"
        sx={{ color: '#ffffff', fontWeight: 400, fontSize: '0.9rem' }}
      >
        {title.split(' ')[0].charAt(0).toUpperCase() +
          title.split(' ')[1].charAt(0).toUpperCase()}
      </Typography>
    </MUIAvatar>
  );
};
