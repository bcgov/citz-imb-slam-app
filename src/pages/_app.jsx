/** @format */

import { Box, Container } from '@mui/material';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Navigation } from '../components';
import '../styles/scss/main.scss';

const queryClient = new QueryClient();

/**
 * the Main Application component
 * @param {} param0
 * @returns {React.jsx}
 */
function Main({ Component, pageProps }) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <Navigation />
        <Box my={11}>
          <Container maxWidth="xl">
            <Component {...pageProps} />
          </Container>
        </Box>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default Main;
