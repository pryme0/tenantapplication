import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Button } from '@Component/index';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { FormContext } from '@Context/index';
import { applicationSchema } from '@Utils/index';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

export const FooterComponent = () => {
  const { formData, updateFormError } = useContext(FormContext);
  const [curentPage, setCurrentPage] = useState('');
  const [unitId, setUnitId] = useState('');
  const [inputData, setInputData] = useState(formData);

  const router = useRouter();

  const CREATE_APPLICATION_MUTATION = gql`
    mutation ($args: CreateApplicationInput!) {
      rental {
        createApplication(input: $args) {
          id
          createdAt
          updatedAt
        }
      }
    }
  `;

  const [createApplication, { loading, error, data }] = useMutation(
    CREATE_APPLICATION_MUTATION,
  );

  const handleFormSubmit = async () => {
    formData.unitId = unitId;
    createApplication({
      variables: {
        args: formData,
      },
    })
      .then(() => {
        NotificationManager.success('Submitted sucessfully');
      })
      .catch((error) => {
        NotificationManager.success('Operation failed');
        console.log(error);
      });
  };

  const handleNavigate = async (type: string) => {
    try {
      if (type === 'Back') {
        router.push(`/application/${unitId}`);
      }
      if (type === 'Cancel') {
        router.push('/');
      }

      if (type === 'Preview') {
        await applicationSchema
          .validate(inputData, { abortEarly: false })
          .then((data) => {
            router.push(`/application/preview/${unitId}`);
          })
          .catch((error) => {
            const format = error.inner.map((error: any) => {
              let newError = { ...error.params, message: error.message };
              return newError;
            });
            updateFormError(format);
          });
      }
    } catch (error: any) {
      console.log({ error });
    }
  };

  useEffect(() => {
    setCurrentPage(router.pathname);
    setInputData(formData);
    if (router.query.unitId) {
      setUnitId(router.query.unitId?.toString());
    }
  }, [formData, router.pathname, router.query.unitId, setCurrentPage]);

  return (
    <FooterContainer>
      <ButtonContainer>
        {curentPage === '/application/preview/[unitId]' ? (
          <Button
            onClick={() => handleNavigate('Back')}
            text="Back"
            width="200"
            height="40"
            background="#ffffff"
          />
        ) : (
          <Button
            onClick={() => handleNavigate('Cancel')}
            text="Cancel"
            width="200"
            height="40"
            background="#ffffff"
          />
        )}

        {curentPage === '/application/preview/[unitId]' ? (
          <Button
            onClick={handleFormSubmit}
            color="ffff"
            text="Submit"
            width="200"
            height="40"
            loading={loading}
          />
        ) : (
          <Button
            onClick={() => handleNavigate('Preview')}
            color="ffff"
            text="Review application"
            width="300"
            height="40"
          />
        )}
      </ButtonContainer>
      <NotificationContainer />
    </FooterContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  padding-right: 215px;
  justify-content: end;
  box-sizing: border-box;
  @media (max-width: 970px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 0px;
  }
`;

const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  z-index: 100;
  justify-content: end;
  @media (max-width: 970px) {
    position: relative;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    display: flex;
    flex-direction: column;
    padding: 0px 30px;
  }
`;
