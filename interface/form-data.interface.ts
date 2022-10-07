

export enum RentCycle {
    DAILY =  "DAILY",
  
    WEEKLY = "WEEKLY",
  
    MONTHLY = "MONTHLY",
  
    BIWEEKLY = "BIWEEKLY",
  
    BIMONTHLY = "BIMONTHLY",
  
    BIANNUAL = "BIANNUAL",
  
    QUATERLY = "QUATERLY",
  
    YEARLY = "YEARLY",
  }


export interface RentalOwnerInput {

  firstName?: string;

  lastName?: string;

  phone?: string;

  email?: string;

  company?: boolean;
}


export interface AddressInput {
  country?: string;

  state?: string;

  city?: string;

  postalCode?: string;

  line?: string;

  line2?: string;
}




export interface EmploymentHistoryInput {

  employerName?: string;

  positionHeld?: string;

  employerEmail?: string;
}


export interface ApplicationTermsInterface {
  agreed: Boolean;

  agreedBy?: string;
}

export interface RentalHistoryInput {

  rentalAddress?: AddressInput;

  reasonForLeaving?: string;

  startDate?: string;

  endDate?: string;

  rentCycle?: RentCycle;

  rent?: string;

  rentalOwner?: RentalOwnerInput;

  rentCurrency?: string;
}


export interface EmergencyContactInterface {

  firstName: string;

  lastName: string;

  relationship: string;

  email: string;

  phone: string;
}

export interface FormDataInterface{
firstName: string;

lastName: string;

email: string;

unitId: string;

dateOfBirth: string;

nationalId: string;

currentAddress: AddressInput;

phone: string;

emergencyContact: EmergencyContactInterface;

rentalHistory: RentalHistoryInput;

employmentHistory: EmploymentHistoryInput;

terms: ApplicationTermsInterface;

}

export interface InputErrorInterface{
message?: string;

originalValue?:  string;

path?: string;

value?:  string;
}

export interface FormContextInterface{
  formData:FormDataInterface;
  updateFormData: (key?: string,payload?: any) => void;
  inputError?:InputErrorInterface[];
  updateFormError(payload:any):void;
}

export const defaultApplicationValues = {
  firstName: '',
  lastName: '',
  email: '',
  dateOfBirth: '',
  unitId: '632c517ab2cb27023db5a516',
  phone: '',
  nationalId: '',
  currentAddress: {
    line: '',
    state: '',
    country: '',
    city:"",
    postalCode:""
  },
  rentalHistory: {
    reasonForLeaving: '',
    startDate: '',
    endDate: '',
    rentCycle: RentCycle.YEARLY,
    rent: '',
    rentalAddress:{
      line: '',
      state: '',
      country: '',
      city:"",
      postalCode:""
    },
    rentalOwner: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    rentCurrency: '',
  },
  employmentHistory: {
    employerName: '',
    positionHeld: '',
    employerEmail: '',
  },
  terms: {
    agreed: false,
    agreedBy: '',
  },
  emergencyContact: {
    firstName: '',
    lastName: '',
    email: '',
    relationship: '',
    phone: '',
  },
}

export interface changeEventInterface {
  event:any;
  formInput:Record<string, any>;
  setFormInput(payload:any):void;
  updateFormData(name:string,formInput: any):void
  baseField:string;
}

export interface LocationChangeEventInterface {
  event:any;
  country:string;
  updateUserState(country:string):any;
  updateUserCities(country:string,state:string):any;
  setStates:(payload:any)=>void;
  setCities:(payload:any)=>void;
  setCountry:(payload:string)=>void
}