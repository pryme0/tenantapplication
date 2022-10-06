import '../styles/globals.css';
import 'react-notifications/lib/notifications.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import Router from 'next/router';
import { CountryContext } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
  const { countries, updateUserCities, updateUserState } =
    useContext(CountryContext);

  return (
    <ApolloProvider client={client}>
      <CountryContext.Provider
        value={{ countries, updateUserCities, updateUserState }}
      >
        <Component {...pageProps} />
      </CountryContext.Provider>
    </ApolloProvider>
  );
}

export default MyApp;
