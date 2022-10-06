/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next';
import { useContext, useRef, useEffect } from 'react';
import {
  ApplicationPreviewComponent,
} from '@Component/form-components/application-preview.component';
import Layout from '@page/layout';
import { FormContext } from '../../../context';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { formData, updateFormData } = useContext(FormContext);

  const router = useRouter()

  useEffect(()=>{
  },[router.query, updateFormData] )

  return (
    <Layout>
        <ApplicationPreviewComponent formData={formData} />
    </Layout>
  );
};


export default Home;
