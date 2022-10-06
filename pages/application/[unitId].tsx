/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next';
import { useEffect, useContext, useCallback } from 'react'
import {
  ApplicationRequestForm,
} from '@Component/index';
import Layout from '@page/layout';
import { useRouter } from 'next/router';
import { FormContext } from '@Context/index';

const Home: NextPage = () => {

  const router= useRouter();
  const { updateFormData } = useContext(FormContext);

  const updateUnitId =  useCallback( async(id:any)=>{
    updateFormData('unitId',id)
  },
  [updateFormData]
  )

  useEffect(()=>{
    updateUnitId(router?.query?.unitId?.toString())

  },[router.isReady, router.query.unitId, updateUnitId] )

  return (
    <Layout>
        <ApplicationRequestForm />
    </Layout>
  );
};


export default Home;
