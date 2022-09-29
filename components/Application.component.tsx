import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import {
  PersonalInformationForm,
  EmergencyContactForm,
  RentalHistoryForm,
  EmploymentHistoryForm,
  TermsComponent,
} from './forms';

export interface ProgressBarProps {
  status: number;
}

export const ApplicationRequestForm = () => {
  const [submit, setSubmit] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [progressBarStatus, setProgressBarStatus] = useState(25);
  const [disableButton, setDisableButton] = useState(false);

  const next = () => {
    let newStep = formStep + 1;
    let newProgress = progressBarStatus + 25;
    if (newStep > 4) {
      newStep = 4;
    }
    if (newProgress > 100) {
      newProgress = 100;
    }
    setFormStep(newStep);
    setDisableButton(false);
    setProgressBarStatus(newProgress);
  };

  useEffect(() => {
    if (formStep <= 1) {
      setDisableButton(true);
    }
  }, [formStep]);

  return (
    <Container>
      <FormContainer>
        <PersonalInformationForm />
        <EmergencyContactForm />
        <RentalHistoryForm />
        <EmploymentHistoryForm />
        <ControlContainer></ControlContainer>
        <TermsComponent />
      </FormContainer>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  color: #000000;
  width: 100%;
  height: 100%;
`;

export const FormContainer = styled.div`
  position: relative;
  width: 100%;
  font-family: Monterassat;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px 50px;
  margin-bottom: 200px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #ffff;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.04);
  @media (max-width: 970px) {
    padding: 0px 30px;
    margin-bottom: 0px;
    box-shadow: 0px 0px 0px 0px;
  }
`;

const ControlContainer = styled.div`
  display: flex;
  postion: relative
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TermsAndConditionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 950px) {
    display: flex;
    justify-content: center;
  }
`;

const TermsText = styled.h3`
  font-family: Montserrat, arial, sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #191919;
`;
