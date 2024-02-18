import * as yup from 'yup';
export const  UserRegisterValidationSchema = yup.object({
    name: yup
      .string('Enter your name')
      .required('Name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    mobile: yup
      .string('Enter your mobile')
      .required('Email is required'),
    roleType: yup
      .string('Enter your role type')
      .required('Role type is required'),
    password: yup
      .string('Enter your password')
      .required('Password is required'),
  });


  export const  UserEditValidationSchema = yup.object({
    name: yup
      .string('Enter your name')
      .required('Name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    mobile: yup
      .string('Enter your mobile')
      .required('Email is required'),
    roleType: yup
      .string('Enter your role type')
      .required('Role type is required'),
 
  });