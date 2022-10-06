/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import { ProgressComponent } from '../components';
import styled from 'styled-components';
import {
  ScrollProvider,
  CountryProvider,
  FormContextProvider,
} from '../context';
import { FooterComponent } from '../components';
import * as yup from 'yup';

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <PageContainer>
      <FormContextProvider>
        <CountryProvider>
          <ScrollProvider>
            <ProgressComponent />
            <ContentContainer>
              <FormContainer>
                {children}
                <FooterComponent />
              </FormContainer>
            </ContentContainer>
          </ScrollProvider>
        </CountryProvider>
      </FormContextProvider>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  padding-left: 50px;
  background-color: #f7f9fa;
  padding: 0px 25px;
  box-sizing: border-box;
  @media (max-width: 970px) {
    flex-direction: column;
    padding-bottom: 40px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  box-sizing: border-box;
  padding-right: 200px;
  @media (max-width: 970px) {
    padding: 0px 0px;
    flex-direction: column;
    padding: 0px 0px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  margin-top: 100px;
  width: 100%;
`;

export default Layout;
