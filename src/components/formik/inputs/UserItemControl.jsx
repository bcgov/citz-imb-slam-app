import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Grid, Stack, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import { ListMenu } from '../../common/ListMenu';
import { useAuth } from '../../../hooks/useAuth/useAuth';

export const UserItemControl = ({ value, disabled }) => {
  const { __licensee__ } = value;
  const { user } = useAuth();

  return (
    <Grid
      container
      spacing={3}
      className="user-info"
      sx={{
        marginTop: '0px !important',
        margin: '0px !important',
        padding: '0.75rem 1rem !important',
        borderBottom: '1px solid #ddd',
        display: 'grid',
        gridTemplateColumns: '40px auto 24px',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Avatar
        alt=""
        sx={{
          width: '34px',
          height: '34px',
          fontSize: '0.8rem',
          fontWeight: '500',
          fontFamily: 'var(--body-font-family)',
          bgcolor: '#ddd',
          color: '#888',
          display: 'flex',
        }}
      >
        <PersonOutlineOutlinedIcon />
      </Avatar>
      <Stack disabled={disabled}>
        <Typography
          variant="span"
          sx={{
            fontSize: '0.9rem',
          }}
        >
          {__licensee__.name}
        </Typography>
        <Typography variant="span" sx={{ fontSize: '0.7rem' }}>
          {__licensee__.email}
        </Typography>
      </Stack>
      {true ? null : <ListMenu />}
    </Grid>
  );
};
