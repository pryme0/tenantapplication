import React, {useContext, useState} from 'react';
import { InputComponent } from '../common';
import styled from 'styled-components';
import { InputWrapper } from '../common';
import { FormContext } from '../../context';
import { ApplicationEmergencyContact } from '../../interface';


export const EmergencyContactForm = () => {

  const { updateFormData, formData } = useContext(FormContext);
  const [ formInput, setFormInput ] = useState<ApplicationEmergencyContact>(formData.emergencyContact);
  const handleChange = (e)=>{
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
    updateFormData('emergencyContact', {
      ...formInput,
      [e.target.name]: e.target.value,
    });
  }


  return (
    <FormContainer>
      <InputWrapper>
        <InputComponent
          bordered
          placeholder="Firstname"
          label="Emergency contact name"
          marginRight='10'
          handleChange={handleChange}
          value={formInput.firstName}
          name="firstName"
        />
          <InputComponent
          bordered
          placeholder="Lastname"
          handleChange={handleChange}
          value={formInput.lastName}
          name="lastName"
        />
      </InputWrapper>
      <InputWrapper>
        <InputComponent
          bordered
          label="Emergency contact relationship"
          handleChange={handleChange}
          value={formInput.relationship}
          name="relationship"
        />
      </InputWrapper>
      <InputWrapper>
        <InputComponent bordered label="Emergency contact email"
         handleChange={handleChange}
         value={formInput.email}
         name="email"
        />
      </InputWrapper>
      <InputWrapper>
        <InputComponent
          bordered
          label="Emergency contact phone"
          handleChange={handleChange}
          value={formInput.phone}
          name="phone"
        />
      </InputWrapper>
      <SectionDemacator/>
    </FormContainer>
  );
};

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 30px;
`;

export const SectionDemacator = styled.div`
border-bottom: 1px solid #e9e9e9;

`;
