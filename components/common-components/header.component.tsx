import React from 'react';
import { HeaderInterface } from '@Interface/index';
import styled from 'styled-components';

export const HeaderComponent = (props: HeaderInterface) => {
  return (
    <HeaderContainer>
       <h3>{props.text}</h3>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 15px;
  font-family: Montserrat, arial, sans-serif, sans-serif;
  box-sizing: border-box;
  color: #DA636F;
  > h3{
    font-size: 16px;
    line-height: 22px;
    font-weight: 600;
  }
`;
