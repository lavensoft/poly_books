import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from 'react-bootstrap';
import { Container, Footer, Navbar } from '@components';
export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Container>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </SSRProvider>
  );
}
