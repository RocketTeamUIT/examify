import * as yup from 'yup';

export const signinScheme = yup.object().shape({
  email: yup.string().required('Email không được để trống.'),
  password: yup.string().trim().required('Mật khẩu không được để trống.'),
});
