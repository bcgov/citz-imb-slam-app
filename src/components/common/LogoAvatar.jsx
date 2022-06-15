import { Avatar, Typography } from '@mui/material';
import { useCallback } from 'react';
// eslint-disable-next-line import/no-cycle
import { useLogo } from '../../hooks';

export const LogoAvatar = (props) => {
  const { title = '', size = 28 } = props;

  const matching = title.replace(/\s+/g, '').toLowerCase();

  const logo = useLogo(matching, title);

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
    <>
      <Avatar
        alt={title}
        sx={{
          width: size,
          height: size,
          bgcolor: stringToColor(title),
        }}
      >
        {logo}
      </Avatar>
      <Typography variant="span" sx={{ marginLeft: '10px', color: '#222222' }}>
        {title}
      </Typography>
    </>
  );
};
