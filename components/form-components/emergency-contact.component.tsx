import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { InputWrapper, InputComponent } from '@Component/index';
import { FormContext } from '@Context/index';
import { EmergencyContactInterface } from '@Interface/index';
import { inputChangeEvent } from '@Utils/index';

export const EmergencyContactForm = () => {
  const { updateFormData, formData } = useContext(FormContext);
  const [formInput, setFormInput] = useState<EmergencyContactInterface>(
    formData.emergencyContact,
  );

  const onInputChange = (event: any) => {
    inputChangeEvent({
      event,
      formInput,
      setFormInput,
      updateFormData,
      baseField: 'emergencyContact',
    });
  };

  return (
    <FormContainer>
      <InputWrapper>
        <InputComponent
          bordered
          placeholder="Firstname"
          label="Emergency contact name"
          marginRight="10"
          handleChange={onInputChange}
          value={formInput.firstName}
          name="firstName"
        />
        <InputComponent
          bordered
          placeholder="Lastname"
          handleChange={onInputChange}
          value={formInput.lastName}
          name="lastName"
        />
      </InputWrapper>
      <InputWrapper>
        <InputComponent
          bordered
          label="Emergency contact relationship"
          handleChange={onInputChange}
          value={formInput.relationship}
          name="relationship"
        />
      </InputWrapper>
      <InputWrapper>
        <InputComponent
          bordered
          label="Emergency contact email"
          handleChange={onInputChange}
          value={formInput.email}
          name="email"
        />
      </InputWrapper>
      <InputWrapper>
        <InputComponent
          bordered
          label="Emergency contact phone"
          handleChange={onInputChange}
          value={formInput.phone}
          name="phone"
        />
      </InputWrapper>
      <SectionDemacator />
    </FormContainer>
  );
};

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 30px;
`;

export const SectionDemacator = styled.div`
  border-bottom: 1px solid #e9e9e9;
`;
