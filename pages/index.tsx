/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next';
import { useRef } from 'react';
import {
  ApplicationRequestForm,
} from '../components';
import Layout from './layout';

const Home: NextPage = () => {
  const pageRef = useRef();

  return (
    <Layout>
        <ApplicationRequestForm />
    </Layout>
  );
};


export default Home;
