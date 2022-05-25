/** @format */
import { Button, Card, Grid, Stack, Typography } from '@mui/material';
import { Unauthorized } from 'components';
import { useAPI } from 'hooks';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
/**
 * the home page
 * @returns {React.jsx}
 */
export default function Home() {
  const boxSX = { width: 300, height: 300, border: '1px solid grey' };

  const { data: session, status } = useSession();

  const { login } = useAPI();

  useEffect(() => {
    console.log('status', status);
    if (status === 'authenticated') {
      login(session.user.name);
    }

    return () => {};
  }, [login, status, session]);

  return (
    <Grid container>
      <Stack direction="column" spacing={3}>
        <Typography variant="h4">Welcome to SLAM</Typography>
        {status !== 'authenticated' && <Unauthorized />}
        <Button onClick={login}>Click me</Button>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quae
          dignissimos minima recusandae sit? Veniam minus nihil praesentium
          error. Provident, eligendi assumenda ab sit pariatur quasi inventore
          quos tenetur a.
        </div>
        <Stack direction="row" spacing={2}>
          <Card sx={boxSX}>box</Card>
          <Card sx={boxSX}>box</Card>
          <Card sx={boxSX}>box</Card>
        </Stack>
        <Stack direction="row">
          <Typography variant="h5">lorem ipsum</Typography>
        </Stack>
        <div>footer</div>
      </Stack>
    </Grid>
  );
}
