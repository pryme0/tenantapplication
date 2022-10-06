import {
  changeEventInterface,
} from '@Interface/index';
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


