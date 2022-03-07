/** @format */

import { QueryClient, QueryClientProvider } from 'react-query';
import 'styles/scss/main.scss';
import { Navigation } from 'components';

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
			<Component {...pageProps} />
		</QueryClientProvider>
	);
}

export default Main;
