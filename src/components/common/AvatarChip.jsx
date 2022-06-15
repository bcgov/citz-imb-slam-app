import { Avatar, Chip, Typography } from '@mui/material';
import { useCallback } from 'react';

export const AvatarChip = (props) => {
  const { title = '', size = 24 } = props;

  const stringToColor = useCallback((string) => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }, []);

  return (
    <Chip
      avatar={
        <Avatar
          alt={title}
          sx={{
            width: size,
            height: size,
            bgcolor: stringToColor(title),
          }}
        >
          <Typography variant="span" sx={{ color: '#ffffff' }}>
            {title.charAt(0).toUpperCase()}
          </Typography>
        </Avatar>
      }
      label={title}
    />
  );
};
