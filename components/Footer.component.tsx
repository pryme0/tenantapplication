import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Button } from './common';
import { useRouter } from 'next/router';
import { FormContext } from '../context';
import * as yup from "yup";
import { applicationSchema } from './validation.schema';

export const FooterComponent = () => {
  const [curentPage, setCurrentPage] = useState('');

  const  { formData,updateFormError,inputError} = useContext(FormContext)

  const router = useRouter();

  const handleFormSubmit = async() => {
     await applicationSchema.validate(formData).then((data)=>{
      }).catch((error)=>{
        updateFormError({...error.params,message:error.message})
      })
  };

  const handleNavigate = async (type: string) => {

    try{
      const validate = await applicationSchema.validate(formData)
      if (type === 'Back') {
        router.push('/', undefined, { shallow: true });
      }
      if (type === 'Cancel') {
        router.push('/', undefined, { shallow: true });
      }

    }catch(error:any){
      console.log({error})
    }
  
  };

  useEffect(() => {
    setCurrentPage(router.pathname);
  }, [router.pathname]);

  const previewForm = async() => {
    try{
      const validate = await applicationSchema.validate(formData)
      router.push('/application-preview', undefined, { shallow: true });
    }catch(error){
      console.log({error})
    }
  
  };

  return (
    <FooterContainer>
      <ButtonContainer>
        {curentPage === '/application-preview' ? (
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

        {
          curentPage === '/application-preview' ?(
            <Button
            onClick={handleFormSubmit}
            color="ffff"
            text="Submit"
            width="200"
            height="40"
          />
          ):(
            <Button
            onClick={handleFormSubmit}
            color="ffff"
            text="Review application"
            width="300"
            height="40"
          />

          )
        }

      </ButtonContainer>
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
