import React, { useContext, useState } from 'react';
import { FormContext } from '../../context';
import { HeaderComponent, InputComponent } from '../common';
import { InputWrapper } from '../common';
import { FormContainer } from './EmergencyContact.component';
import { SectionDemacator } from './EmergencyContact.component';

export const EmploymentHistoryForm = () => {
  const { updateFormData, formData } = useContext(FormContext);
  const [formInput, setFormInput] = useState(formData.employmentHistory);

  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
    updateFormData('employmentHistory', {
      ...formInput,
      [e.target.name]: e.target.value,
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
          handleChange={handleChange}
          value={formInput.employerName}
        />
      </InputWrapper>
      <InputWrapper>
        <InputComponent
          bordered
          placeholder="Position held"
          label="Position held"
          handleChange={handleChange}
          name="positionHeld"
          value={formInput.positionHeld}
        />
      </InputWrapper>

      <InputWrapper>
        <InputComponent
          bordered
          placeholder="input email"
          label="Employer email"
          handleChange={handleChange}
          name="employerEmail"
          value={formInput.employerEmail}
        />
      </InputWrapper>
      <SectionDemacator />
    </FormContainer>
  );
};
