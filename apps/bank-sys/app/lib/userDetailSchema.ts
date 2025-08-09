import { z } from 'zod';

export const genderEnum = z.enum(['male', 'female', 'other']);
export const occupationEnum = z.enum([
  'Student',
  'Employee',
  'SelfEmployed',
  'Business',
  'Retired',
  'Homemaker',
  'Other',
]);

const bankNameEnum = z.enum(["ICICI", "SBI", "HDFC", "UBI", "notdefined"]);

export const acc_type=z.enum([
    'savings',
    'checking',
    'wallet',
    'joint',
    'business'
])

export const accStatus=z.enum([
  'active',
  'closed',
  'frozen'
])

export const accType=z.enum([
  'savings',
  'checking',
  'wallet',
  'joint',
  'business',
])


export const bank=z.enum([
    'icici',
    'sbi',
    'hdfc',
    'ubi'
])

export const userDetailsSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.coerce.date(), 
  gender: genderEnum,
  fatherName: z.string(),
  motherName: z.string(),
  aadharNumber: z.string(),
  panNumber: z.string(),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  pincode: z.string(),
  occupation: occupationEnum,
  monthlyIncome: z.string(),
  nomineeFirstName: z.string(),
  nomineeLastName: z.string(),
  nomineeRelation: z.string(),
  accountType:acc_type,
});

export const signupUserSchema=z.object({
    fullName: z.string(),
    email: z.string().email(),
    phoneNumber: z.string(),
    password:z.string().min(6),
    bankName:bankNameEnum
})

export const userProfileSchema=z.object({
  fullName: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  password:z.string().min(6),
  dob:z.coerce.date(),
})

export const userAccountSchema=z.object({
  accName: z.string(),
  accNumber:z.string(),
  accType:accType,
  balance: z.number(),
  createdAt:z.coerce.date(),
  status:accStatus,
})