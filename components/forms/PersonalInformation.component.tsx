/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect, useCallback } from 'react';
import { HeaderComponent, InputComponent, Select } from '../common';
import styled from 'styled-components';
import { CountryContext, FormContext } from '../../context';
import { InputWrapper } from '../common';
import { StateInterface, CountryInterface } from '../../interface';
import { inputChangeEvent, onLocationChangeEvent } from '../../utils';
import _ from 'lodash';

export const PersonalInformationForm = () => {
  const { formData, updateFormData } = useContext(FormContext);
  const [states, setStates] = useState<CountryInterface[]>([{ name: 'State' }]);
  const [cities, setCities] = useState<StateInterface[]>([{ name: 'City' }]);
  const [country, setCountry] = useState('');
  const [formInput, setFormInput] = useState(formData);

  const { countries, updateUserState, updateUserCities } =
    useContext(CountryContext);

  const onInputChange = (event) => {
    inputChangeEvent({ event, formInput, setFormInput, updateFormData, baseField:"" });
  };

  const onLocationChange = useCallback(
    async (event) => {
      inputChangeEvent({ event, formInput, setFormInput, updateFormData, baseField:"" });
      onLocationChangeEvent({
        event,
        country,
        updateUserState,
        updateUserCities,
        setStates,
        setCities,
        setCountry
      });
    },
    [country, setCountry,setCities,setStates, formInput, updateFormData, updateUserCities, updateUserState],
  );

  useEffect(() => {
    onLocationChange({ target: { name: 'country', value: 'Nigeria' } });
  }, []);

  return (
    <Container>
      <HeaderComponent text="Personal Information" />
      <Container>
        <InputWrapper>
          <InputComponent
            bordered
            placeholder=" firstname"
            label="Applicant name *"
            required
            marginRight="10"
            name="firstName"
            value={formInput.firstName}
            handleChange={onInputChange}
          />
          <InputComponent
            value={formInput.lastName}
            name="lastName"
            bordered
            placeholder="Lastname"
            required
            handleChange={onInputChange}
          />
        </InputWrapper>

        <InputWrapper>
          <Select
            name="currentAddress.country"
            label="Applicant current address"
            options={countries}
            default={'Nigeria'}
            onChange={onLocationChange}
          />
        </InputWrapper>
        <InputWrapper>
        <InputComponent
          showDate
          bordered
          width='50'
          label="Date of birth *"
          placeholder="MM/DD/YYY"
          marginRight="10"
          handleChange={onInputChange}
          value={formInput?.dateOfBirth}
          name="dateOfBirth"
        />
        </InputWrapper>
        <InputWrapper>
          <Select
            name="currentAddress.state"
            width={'50'}
            options={states}
            marginRight="10"
            default="State"
            onChange={onLocationChange}
          />
          <Select
            name="address.city"
            onChange={onLocationChange}
            marginRight="10"
            width="30"
            default="City"
            options={cities}
          />
          <InputComponent
            name="currentAddress.postalCode"
            bordered
            placeholder="Zip code"
            width="20"
            required
            handleChange={onInputChange}
          />
        </InputWrapper>

        <InputWrapper>
          <InputComponent
            name="currentAddress.line1"
            bordered
            placeholder="line 1"
            required
            handleChange={onInputChange}
            marginRight="10"
          />
          <InputComponent
            name="currentAddress.line2"
            bordered
            placeholder="line 2"
            required
            handleChange={onInputChange}
          />
        </InputWrapper>
        <InputWrapper>
          <InputComponent
            bordered
            placeholder="input email"
            label="Applicant email"
            required
            name="email"
            handleChange={onInputChange}
            value={formInput.email}
          />
        </InputWrapper>
        <InputWrapper>
          <InputComponent
            bordered
            placeholder="input phnone number"
            label="Applicant phone number"
            required
            name="phone"
            handleChange={onInputChange}
            value={formInput.phone}
          />
        </InputWrapper>
        <InputWrapper>
          <DateContainer></DateContainer>
        </InputWrapper>

        <InputWrapper>
          <InputComponent
            bordered
            placeholder="input National Id number"
            label="National Id number"
            required
            name="nationalId"
            value={formInput.nationalId}
            handleChange={onInputChange}
          />
        </InputWrapper>
      </Container>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const DateContainer = styled.div`
  display: flex;
`;
