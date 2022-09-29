/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next';
import { useRef } from 'react';
import {
  ApplicationPreviewComponent,
} from '../components';
import Layout from './layout';

const Home: NextPage = () => {
  const pageRef = useRef();

  return (
    <Layout>
        <ApplicationPreviewComponent />
    </Layout>
  );
};


export default Home;
