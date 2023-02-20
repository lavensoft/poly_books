import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from 'react-bootstrap';
import { DefaultLayout } from '@components';
export default function App({ Component, pageProps }) {
  const Layout =Component.Layout || DefaultLayout ;
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}
