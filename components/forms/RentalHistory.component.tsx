import React, { useCallback, useContext, useEffect, useState } from 'react';
import { HeaderComponent, InputComponent, Select } from '../common';
import { InputWrapper } from '../common';
import { FormContainer } from './EmergencyContact.component';
import { rentCycleData } from '../../data';
import { SectionDemacator } from './EmergencyContact.component';
import { CountryContext, FormContext } from '../../context';
import { inputChangeEvent, onLocationChangeEvent } from '../../utils';
import _ from 'lodash';
import {
  CountryInterface,
  StateInterface,
  RentalHistoryInput,
} from '../../interface';

export const RentalHistoryForm = () => {
  const { updateFormData, formData } = useContext(FormContext);
  const [states, setStates] = useState<CountryInterface[]>([{ name: 'State' }]);
  const [cities, setCities] = useState<StateInterface[]>([{ name: 'City' }]);
  const [country, setCountry] = useState('Country');
  const [formInput, setFormInput] = useState<RentalHistoryInput>(
    formData.rentalHistory,
  );
  const { countries, updateUserState, updateUserCities } =
    useContext(CountryContext);
  const onLocationChange = useCallback(
    async (event) => {
      inputChangeEvent({
        event,
        formInput,
        setFormInput,
        updateFormData,
        baseField: 'rentalHistory',
      });
      onLocationChangeEvent({
        event,
        country,
        updateUserState,
        updateUserCities,
        setStates,
        setCities,
        setCountry,
      });
    },
    [country, formInput, updateFormData, updateUserCities, updateUserState],
  );

  const onInputChange = (event) => {
    inputChangeEvent({
      event,
      formInput,
      setFormInput,
      updateFormData,
      baseField: 'rentalHistory',
    });
  };

  // useEffect(() => {
  //   onLocationChange({ target: { name: 'country', value: 'Nigeria' } });
  // }, [cities, onLocationChange, states]);

  return (
    <FormContainer>
      <HeaderComponent text="Rental History" />

      <InputWrapper>
        <Select
          label="Rental address"
          default="Nigeria"
          name="rentalAddress.country"
          options={countries}
          handleChange={onLocationChange}
          validationLabel="rentalAddress.country"
        />
      </InputWrapper>
      <InputWrapper>
        <InputComponent
          handleChange={onInputChange}
          value={formInput?.rentalAddress?.line}
          bordered
          placeholder="line"
          marginRight="10"
          name="rentalAddress.line"
          validationLabel="rentalAddress.line"
        />
        <InputComponent
          handleChange={onInputChange}
          value={formInput?.rentalAddress?.line}
          bordered
          placeholder="Line2"
          name="rentalAddress.line2"
          validationLabel="rentalAddress.line2"
        />
      </InputWrapper>
      <InputWrapper>
        <Select
          handleChange={onLocationChange}
          options={states}
          marginRight="10"
          width="50"
          default="State"
          name="rentalAddress.state"
        />
        <Select
          handleChange={onLocationChange}
          default="Cities"
          marginRight="10"
          name="rentalAddress.city"
          width="30"
          options={cities}
        />
        <InputComponent
        handleChange={onLocationChange}
          name="rentalAddress.zip"
          width="20"
          bordered
          placeholder="Zip code"
          validationLabel="rentalHistory.rentalAddress.zip"
          value={formInput?.rentalAddress?.zip}
        />
      </InputWrapper>
      <InputWrapper>
        <InputComponent
          showDate
          bordered
          label="Rental start date *"
          placeholder="MM/DD/YYY"
          marginRight="10"
          handleChange={onInputChange}
          value={formInput?.startDate}
          name="startDate"
          validationLabel="rentalHistory.startDate"
        />
        <InputComponent
          handleChange={onInputChange}
          label="Rental end date *"
          showDate
          bordered
          placeholder="MM/DD/YYY"
          value={formInput?.endDate}
          name="endDate"
          validationLabel="rentalHistory.endDate"
        />
      </InputWrapper>
      <InputWrapper>
        <InputComponent
          handleChange={onInputChange}
          value={formInput?.rent}
          bordered
          placeholder="$0.00"
          label="rent"
          name="rent"
          validationLabel="rentalHistory.rent"
        />
      </InputWrapper>
      <InputWrapper>
        <InputComponent
          bordered
          placeholder="Input previous currency"
          label="Currency"
          handleChange={onInputChange}
          value={formInput?.rentCurrency}
          name="rentCurrency"
          validationLabel="rentalHistory.rentCurrency"
        />
      </InputWrapper>
      <InputWrapper>
        <InputComponent
          handleChange={onInputChange}
          bordered
          label="Reason for leaving"
          value={formInput?.reasonForLeaving}
          name="reasonForLeaving"
          validationLabel="rentalHistory.reasonForLeaving"
        />
      </InputWrapper>
      <InputWrapper>
        <Select
          handleChange={onInputChange}
          options={rentCycleData}
          label="Rent cycle"
          default={rentCycleData[0].name}
          name="rentCycle"
          validationLabel="rentalHistory.rentCycle"
        />
      </InputWrapper>
      <InputWrapper>
        <InputComponent
          bordered
          placeholder="Firstname"
          label="Rental owner"
          marginRight="10"
          handleChange={onInputChange}
          name="rentalOwner.firstName"
          validationLabel="rentalOwner.firstName"
          value={formInput.rentalOwner?.firstName}
        />
        <InputComponent
          bordered
          placeholder="Lastname"
          handleChange={onInputChange}
          name="rentalOwner.lastName"
          validationLabel="rentalOwner.lastName"
          value={formInput.rentalOwner?.lastName}
        />
      </InputWrapper>
      <InputWrapper>
        <InputComponent
          bordered
          label="Rental owner email"
          handleChange={onInputChange}
          name="rentalOwner.email"
          validationLabel="rentalOwner.email"
          value={formInput.rentalOwner?.email}
        />
      </InputWrapper>
      <InputWrapper>
        <InputComponent
          bordered
          label="Rental owner phone"
          handleChange={onInputChange}
          name="rentalOwner.phone"
          validationLabel="rentalOwner.phone"
          value={formInput.rentalOwner?.phone}
        />
      </InputWrapper>
      <SectionDemacator />
    </FormContainer>
  );
};
