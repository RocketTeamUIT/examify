import * as yup from 'yup';

export const forgetPasswordScheme = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required('Email không được để trống.')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Email vừa nhập không đúng định dạng.',
    ),
});
