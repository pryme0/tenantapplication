/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next';
import { useRef } from 'react';
import styled from 'styled-components';
import {
Button
} from '@Component/common-components';
import Layout from './layout';

const Home: NextPage = () => {
  const handleClick=()=>{

    console.log('index page')
  }

  return (
      <IndexConatiner>

      <Button
            onClick={() => handleClick()}
            text="Apply"
            width="500"
            height="50"
            background="#9d7b7b"
            color='ffff'
          />

      </IndexConatiner>
  );
};


const IndexConatiner = styled.div`
display: flex;
margin-top: auto;
margin-bottom:auto;
height: 100vh ;
justify-content:center;
`


export default Home;
