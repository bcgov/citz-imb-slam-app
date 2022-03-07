/** @format */

import { QueryClient, QueryClientProvider } from 'react-query';
import 'styles/scss/main.scss';
import { Navigation } from 'components';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
			<Navigation />
			<Component {...pageProps} />
		</QueryClientProvider>
	);
}

export default MyApp;
