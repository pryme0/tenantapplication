import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useState, useContext } from 'react';
import Router from 'next/router'
import { CountryContext } from '../context';
import axios from 'axios';

//https://api.first.org/data/v1/countries?region=africa&pretty=true

function MyApp({ Component, pageProps }: AppProps) {

  const [countries, setCountries] = useState([])


  return(

    <CountryContext.Provider value={{countries}} >
    <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
      </CountryContext.Provider>

  )

}

export default MyApp
