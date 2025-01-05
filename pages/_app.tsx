// pages/_app.tsx
import { AppProps } from 'next/app'; // Impor AppProps
import '../styles/global.css'; // Mengimpor file global.css yang berisi @import untuk font

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
