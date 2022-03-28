/** @format */

import { QueryClient, QueryClientProvider } from 'react-query';
import 'styles/scss/main.scss';
import { Navigation } from 'components';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Box, Container, Paper } from '@mui/material';

const queryClient = new QueryClient();

/**
 * the Main Application component
 * @param {} param0
 * @returns {React.jsx}
 */
function Main({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
			<Navigation />
			<Box my={11}>
				<Container maxWidth='xl'>
					{/* <Paper elevation={2}> */}
						<Component {...pageProps} />
					{/* </Paper> */}
				</Container>
			</Box>
			{/* <ReactQueryDevtools /> */}
		</QueryClientProvider>
	);
}

export default Main;
