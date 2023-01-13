import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from 'react-bootstrap';
export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}
