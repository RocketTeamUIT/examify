import * as yup from 'yup';

export const signinScheme = yup.object().shape({
  email: yup.string().required('Email không được để trống.').email('Email không đúng định dạng'),
  password: yup.string().trim().required('Mật khẩu không được để trống.'),
});
