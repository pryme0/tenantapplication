import React, { useState } from 'react';
import styled from 'styled-components';
import {
  PersonalInformationForm,
  EmergencyContactForm,
  RentalHistoryForm,
  EmploymentHistoryForm,
  TermsComponent,
} from '@Component/index';

export interface ProgressBarProps {
  status: number;
}

export const ApplicationRequestForm = () => {
  const [formStep, setFormStep] = useState(1);
  const [progressBarStatus, setProgressBarStatus] = useState(25);

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
    setProgressBarStatus(newProgress);
  };


  return (
    <Container>
      <ApplicationFormsContainer>
        <PersonalInformationForm />
        <EmergencyContactForm />
        <RentalHistoryForm />
        <EmploymentHistoryForm />
        <ControlContainer></ControlContainer>
        <TermsComponent />
      </ApplicationFormsContainer>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  color: #603c3c;
  width: 100%;
  height: 100%;
`;

export const ApplicationFormsContainer = styled.div`
  position: relative;
  width: 100%;
  font-family: Montserrat;
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
