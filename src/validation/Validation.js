import * as yup from "yup";
export const LoginValidationSchema = yup.object({
  email: yup
    .string("Enter your name")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
//   remember:yup.string("remember me")
});
