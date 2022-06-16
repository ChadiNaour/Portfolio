import '../styles/globals.css'
import { useEffect } from 'react';
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {
  window.onunload = () => {
 
    window.scrollTo(0, 0);
  }

}, [])

  return <Component {...pageProps} />
}

export default MyApp
