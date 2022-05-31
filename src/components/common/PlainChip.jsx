import { Chip } from '@mui/material';

export const PlainChip = ({ title }) => {
  return (
    <Chip
      // avatar={<Avatar>{title.charAt(0).toUpperCase()}</Avatar>}
      label={title}
    />
  );
};
