import styles from '../styles/globals.css';
import { GoogleAnalytics } from "nextjs-google-analytics";
import "@fontsource/noto-sans-mono";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
}