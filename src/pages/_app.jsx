/** @format */

import { Box, Container } from '@mui/material';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
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
function Main(props) {
  const { Component, pageProps } = props;
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>SLAM | {Component.name}</title>
          <meta
            name="description"
            content="Software License and Application Management"
          />
        </Head>
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
