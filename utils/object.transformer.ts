import React from 'react';
import {
  changeEventInterface,
  LocationChangeEventInterface,
} from '../interface';
import _ from 'lodash';

export const inputChangeEvent = (payload: changeEventInterface) => {
  const checkNested = payload.event.target.name.split('.');
  const baseObject = payload.formInput;
  if (checkNested.length > 1) {
    const updateNestedValue = _.set(
      baseObject,
      checkNested,
      payload.event.target.value,
    );
    payload.setFormInput(updateNestedValue);
    return payload.updateFormData(payload.baseField, updateNestedValue);
  }else{
    const udateValue = _.set(
      baseObject,
      [payload.event.target.name],
      payload.event.target.value,
    );
    payload.setFormInput(udateValue);
   return payload.updateFormData(payload.baseField, udateValue);
  }
 
};

export const onLocationChangeEvent = async (
  payload: LocationChangeEventInterface,
) => {
  if (payload.event.target.name.includes('country')) {
    payload.setCountry(payload.event.target.value);
    const states = await payload.updateUserState(payload.event.target.value);
    return payload.setStates(states);
  }
  if (payload.event.target.name.includes('state')) {
    const cities = await payload.updateUserCities(
      payload.country,
      payload.event.target.value,
    );
    return payload.setCities(cities);
  }
};
