import '../styles/globals.css'
import "../styles/normalize.css"
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from '../styletron'

function MyApp({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron}>
      <Component {...pageProps} />
    </StyletronProvider>
  );
}

export default MyApp
