import * as yup from 'yup';

export const changePasswordScheme = yup.object().shape({
  oldPassword: yup.string().trim().required('Vui lòng nhập trường này!'),
  password: yup
    .string()
    .trim()
    .required('Vui lòng nhập trường này!')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Mật khẩu phải chứa ít nhất 8 ký tự; bao gồm 1 hoa, 1 thường, 1 số và 1 ký tự đặc biệt',
    ),
  confirmPassword: yup
    .string()
    .required('Vui lòng nhập trường này!')
    .oneOf([yup.ref('password'), null], 'Mật khẩu nhập lại phải trùng với mật khẩu vừa nhập'),
});
