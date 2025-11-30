import type { AppProps } from "next/app";
import { CountProvider } from "../context/CountContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CountProvider>
      <Component {...pageProps} />
    </CountProvider>
  );
}

export default MyApp;
