import { createContext, useState } from 'react';
import {
  FormDataInterface,
  FormContextInterface,
  defaultApplicationValues
} from '../interface';
import yup from 'yup';

export const FormContext = createContext<FormContextInterface>({
  updateFormData:()=>{},
  formData:defaultApplicationValues,
  inputError:{},
  updateFormError:()=>{},
});

export const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = useState<FormDataInterface>(defaultApplicationValues);
  const [inputError, setInputError] = useState({
    message: "",
    path:"",
    originalValue:"",
    value:""
  });

  const updateFormData = (key?: string, value?: any) => {
    if(key){
      return setFormData({ ...formData, [key]: value });
    }
    setFormData({ ...formData, ...value });
  };

  const updateFormError = (data:any)=>{
    setInputError(data)
  }

  return (
    <FormContext.Provider value={{ formData, updateFormData,inputError, updateFormError}}>
      {children}
    </FormContext.Provider>
  );
};
