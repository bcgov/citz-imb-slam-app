import { CircularProgress, Box, Typography } from '@mui/material';

export const QuantityAssigned = (props) => {
  const { assigned = 0, available = 0 } = props;

  function getFraction(top, bottom) {
    if (top === 0 && bottom === 0) {
      return 0;
    }
    if (top > bottom) {
      return 1;
    }
    return top / bottom;
  }

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant="determinate"
        value={100}
        className="background"
        style={{ color: '#eeeeee' }}
        size={55}
        thickness={2.5}
      />
      <CircularProgress
        variant="determinate"
        value={getFraction(assigned, available) * 100}
        className="progress"
        size={55}
        thickness={2.5}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.primary">
          <span>
            {assigned}/{available}
          </span>
        </Typography>
      </Box>
    </Box>
  );
};
