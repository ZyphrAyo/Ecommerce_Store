import Head from 'next/head';
import '../styles/global.scss';
import { Provider } from 'react-redux';
import store from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { SessionProvider } from "next-auth/react"

const persistor = persistStore(store);

function MyApp({ Component, pageProps: { session, ...pageProps }}) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500;600&family=Roboto:ital,wght@0,300;0,400;0,500;0,900;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Dosis:wght@300;400;500;600&family=Roboto:ital,wght@0,300;0,400;0,500;0,900;1,700&display=swap" rel="stylesheet" />
        <title>Ecom</title>
        <meta name="description" content="Ecomm-Online Shopping Service" />
        <link rel="icon" href="/favicon.ico" alt="Ecom Icon" />
      </Head>
      <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
