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
  }

  return (
      <IndexConatiner>
        <ButtonContainer>
        <Button
            onClick={() => handleClick()}
            text="Apply"
            width="400"
            height="50"
            background="7e2929"
            color='ffff'
          />

        </ButtonContainer>
      </IndexConatiner>
  );
};


const IndexConatiner = styled.div`
display: flex;
height: 100vh ;
justify-content:center;
`
const ButtonContainer = styled.div`
display: flex;
align-items: center;
`;


export default Home;
