/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next';
import { useContext, useRef } from 'react';
import {
  ApplicationPreviewComponent,
} from '../components';
import Layout from './layout';
import { FormContext } from '../context';

const Home: NextPage = () => {
  const pageRef = useRef();
  const { formData } = useContext(FormContext);

  return (
    <Layout>
        <ApplicationPreviewComponent formData={formData} />
    </Layout>
  );
};


export default Home;
