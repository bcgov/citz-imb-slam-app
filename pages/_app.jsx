import { QueryClient, QueryClientProvider } from "react-query"
import '../styles/scss/main.scss'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (

    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>

  )
}

export default MyApp
