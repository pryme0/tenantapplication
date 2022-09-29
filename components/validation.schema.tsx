import * as yup from 'yup';

export const applicationSchema = yup.object({
  firstName: yup.string().max(32).required("Provide firstname"),
  lastName: yup.string().max(32).required(),
  nationalId: yup.string().min(10).max(20).required(),
  email: yup.string().email().required(),
  dateOfBirth: yup.string().min(10).max(20).required("Provide date of birth"),
  phone: yup.string().min(7).max(11).required("Provide phone number"),
  currentAddress: yup.object({
    line1: yup.string().min(10).max(50),
    state: yup.string().min(10).max(50).required(),
    country: yup.string().min(10).max(20).required(),
    city: yup.string().min(10).max(20).required(),
    postalCode: yup.string().min(7).max(10),
  }),
  emergencyContact: yup.object({
    firstName: yup.string().min(10).max(20).required(),
    lastName: yup.string().min(10).max(20).required(),
    email: yup.string().min(10).max(20).required(),
    relationship: yup.string().min(10).max(20).required(),
    phone: yup.string().min(10).max(20).required(),
  }),
  terms: yup.object({
    agreed: yup.boolean().required(),
    agreedBy: yup.string().min(10).max(20).required(),
  }),
  employmentHistory: yup.object({
    employerName: yup.string().min(10).max(20).required(),
    positionHeld: yup.string().min(10).max(20).required(),
    employerEmail: yup.string().min(10).max(20).required(),
  }),
//   reasonForLeaving: yup.string().min(10).max(20).required(),
  rentalHistory: yup.object({
    reasonForLeaving: yup.string().min(10).max(20).required(),
    startDate: yup.string().min(10).max(20).required(),
    endDate: yup.string().min(10).max(20).required(),
    rentCycle: yup.string().min(10).max(20).required(),
    rent: yup.string().min(10).max(30).required(),
    rentalAddress: yup.object({
      line1: yup.string().min(10, 'Characters must be at least 10').max(20),
      state: yup.string().min(10).max(20),
      country: yup.string().min(10).max(20).required(),
      city: yup.string().min(10).max(20).required(),
      postalCode: yup.string().min(10).max(20),
    }),
    rentalOwner: yup.object({
      firstName: yup.string().min(10).max(20).required(),
      lastName: yup.string().min(10).max(20).required(),
      email: yup.string().min(10).max(20).required(),
      phone: yup.string().min(10).max(20).required(),
    }),
    rentCurrency: yup.string().min(10, 'Character length must be at least 10').max(20).required("Rent currency is a required field"),
  }),
});
