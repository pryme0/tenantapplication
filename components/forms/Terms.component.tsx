import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FormContext } from '../../context';
import { ApplicationTermsInput } from '../../interface';
import { HeaderComponent, InputComponent } from '../common';
import _ from 'lodash';

export const TermsComponent = () => {


  const { updateFormData, formData } = useContext(FormContext);
  const [checkButton, setCheckButton] = useState(false)
  const [formInput, setFormInput] = useState<ApplicationTermsInput>(
    formData.terms,
  );

  const toggleCheck =()=>{
    setCheckButton(!checkButton)
  }

  const onInputChange = (e) => {
    const checkNested = e.target.name.split('.');
    const baseObject = formInput;
    if (checkNested.length > 1) {
      const updateNestedValue = _.set(baseObject, checkNested, e.target.value);
      setFormInput(updateNestedValue);
      return updateFormData('terms', formInput);
    }
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
   return updateFormData('terms', formInput);
  };

  return (
    <TermsAndConditionsContainer>
      <HeaderComponent text="Terms and conditions" />
      <TermsText>
        I understand that this is a routine application to establish credit,
        character, employment, and rental history. I also understand that this
        is NOT an agreement to rent and that all applications must be approved.
        I authorize verification of references given. I declare that the
        statements above are true and correct, and I agree that the landlord may
        terminate my agreement entered into in reliance on any misstatement made
        above.
      </TermsText>
      <InputWrapper>
        <RadioButton onClick={toggleCheck} checked={checkButton} onChange={onInputChange} name="agreedTo" type="radio" />
        <RadioButtonLabel>Agreed to</RadioButtonLabel>
      </InputWrapper>
      <InputWrapper>
        <InputComponent handleChange={onInputChange} name='agreedBy' label="Agreed by" placeholder="Agreed by" bordered />
      </InputWrapper>

      <TermsText>
        By submitting this application I am giving ruu25052.managebuilding.com
        permission to run a background check on myself and any cosigners, and
        agreeing to the site Privacy Policy and Terms of Service
      </TermsText>
    </TermsAndConditionsContainer>
  );
};

const TermsAndConditionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 950px) {
    display: flex;
    justify-content: center;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  align-items: start;
  align-items: center;
`;

const TermsText = styled.h3`
  font-family: Montserrat, arial, sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #191919;
`;

const RadioButton = styled.input`
  border-radius: 4px;
  box-sizing: border-box;
  appearance: none;
  background: white;
  outline: 2px solid #333;
  border: 3px solid white;
  width: 15px;
  height: 15px;
  border: .5px solid #fdfdff;
  &:checked {
    background-color: #3a3a3d;
  }
`;

const RadioButtonLabel = styled.h3`
  font-size: 12px;
  font-weight: 400;
  margin: 0px;
  padding-top: 5px;
  margin-left: 10px;
`;
