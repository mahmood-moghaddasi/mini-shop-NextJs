import "../styles/globals.css";
import TanstackQueryProvider from "../providers/TanstackQueryProvider";
function MyApp({ Component, pageProps }) {
  return (
    <TanstackQueryProvider>
      <Component {...pageProps} />
    </TanstackQueryProvider>
  );
}

export default MyApp;
