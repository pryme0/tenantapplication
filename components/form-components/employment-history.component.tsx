import React, { useContext, useState } from 'react';
import { FormContext } from '@Context/index';
import { inputChangeEvent } from '@Utils/index';
import {
  HeaderComponent,
  InputComponent,
  InputWrapper,
  FormContainer,
  SectionDemacator
} from '@Component/index';

export const EmploymentHistoryForm = () => {
  const { updateFormData, formData } = useContext(FormContext);
  const [formInput, setFormInput] = useState(formData.employmentHistory);

  const onInputChange = (event: any) => {
    inputChangeEvent({
      event,
      formInput,
      setFormInput,
      updateFormData,
      baseField: 'employmentHistory',
    });
  };

  return (
    <FormContainer>
      <HeaderComponent text="Employment" />
      <InputWrapper></InputWrapper>
      <InputWrapper>
        <InputComponent
          bordered
          placeholder="Employer name"
          label="Employer name"
          name="employerName"
          handleChange={onInputChange}
          value={formInput.employerName}
          validationLabel="employmentHistory.employerName"
        />
      </InputWrapper>
      <InputWrapper>
        <InputComponent
          bordered
          placeholder="Position held"
          label="Position held"
          handleChange={onInputChange}
          name="positionHeld"
          value={formInput.positionHeld}
          validationLabel="employmentHistory.positionheld"
        />
      </InputWrapper>

      <InputWrapper>
        <InputComponent
          bordered
          placeholder="input email"
          label="Employer email"
          handleChange={onInputChange}
          name="employerEmail"
          value={formInput.employerEmail}
          validationLabel="employmentHistory.employerEmail"
        />
      </InputWrapper>
      <SectionDemacator />
    </FormContainer>
  );
};
