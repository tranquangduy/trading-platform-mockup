import Layout from '@/components/organisms/PrivateLayout';
import '@/styles/globals.css';
import { NextPageWithLayout } from './page';
import { AppProps } from 'next/app';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return <>{getLayout(<Component {...pageProps} />, pageProps?.heading)}</>;
}
