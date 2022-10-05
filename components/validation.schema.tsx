import * as yup from 'yup';

export const applicationSchema = yup.object({
  firstName: yup.string().max(32).required('Firstname is a required field'),
  lastName: yup.string().max(32).required('Lastname is a required field'),
  nationalId: yup.string().min(10).max(20).required(),
  email: yup.string().email().required('Email is a required field'),
  dateOfBirth: yup.string().min(5).required('Provide date of birth'),
  phone: yup
    .string()
    .min(7)
    .max(11, 'Characters must be at most 11')
    .required('Provide phone number'),
  currentAddress: yup.object({
    line: yup.string().min(2, 'Characters must be at least 2'),
    state: yup
    .string()
    .required('Current address state is required'),
  country: yup.string().min(4, 'Current address country is required').required(),
  city: yup
    .string()
    .required('Current address city is required'),
    zip: yup
      .string()
      .max(10, 'Characters must be at most 10'),
  }),
  emergencyContact: yup.object({
    firstName: yup
      .string()
      .min(3, 'Characters must be at least 3')
      .max(20, 'Characters must be at most 20')
      .required('Firstname is a required field'),
    lastName: yup
      .string()
      .min(3, 'Characters must be at least 3')
      .max(20, 'Characters must be at most 20')
      .required('Lastname is a required field'),
    email: yup
      .string()
      .min(10, 'Characters must be at least 10')
      .max(20, 'Characters must be at most 20')
      .required('email is a required field'),
    relationship: yup
      .string()
      .min(5, 'Characters must be at least 5')
      .max(20, 'Characters must be at most 20')
      .required('Relationship is a required field'),
    phone: yup
      .string()
      .min(9, 'Characters must be at leasrt 9')
      .max(20, 'Characters must be at most 20')
      .required('Emergency contact phone number is a required field'),
  }),
  terms: yup.object({
    agreed: yup.string().required(),
    agreedBy: yup.string().min(5, 'Characters must be at least 5').required(),
  }),
  employmentHistory: yup.object({
    employerName: yup
      .string()
      .min(5, 'Characters must be at most 5')
      .required('Employer name is a required field'),
    positionHeld: yup.string().required('Position held is a required field'),
    employerEmail: yup.string().required('Employer email is a required field'),
  }),
  rentalHistory: yup.object({
    reasonForLeaving: yup.string().min(10),
    startDate: yup
      .string()
      .min(5, 'Characters must be at least 5')
      .required('StartDate is a required field'),
    endDate: yup
      .string()
      .min(5, 'Characters must be at least 1')
      .required('End date is a required field'),
    rentCycle: yup
      .string()
      .min(1, 'Characters must be at least 1')
      .required('Rent cycle is a required field'),
    rent: yup.string().min(2).required('Rent is a required field'),
    rentalAddress: yup.object({
      line: yup.string().required('Rental address line is required'),
      state: yup
        .string()
        .required('Rental address state is required'),
      country: yup.string().min(4, 'Rental address country is required').required(),
      city: yup
        .string()
        .required('rental address city is required'),
      zip: yup.string().min(4, 'Characters must be at least 4'),
    }),
    rentalOwner: yup.object({
      firstName: yup
        .string()
        .min(4, 'Characters must be at least 4')
        .required('Rental owner firtname is required'),
      lastName: yup
        .string()
        .min(5)
        .required('Rental owner lastname is required'),
      email: yup.string().min(5),
      phone: yup
        .string()
        .min(10)
        .required('Rental owner phone number is required'),
    }),
    rentCurrency: yup.string().required('Rent currency is a required field'),
  }),
});
