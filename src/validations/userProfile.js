import * as yup from 'yup';

export const userProfileScheme = yup.object().shape({
  firstname: yup.string().required('Họ và tên đệm không được để trống'),
  lastname: yup.string().required('Tên không được để trống'),
  phoneNumber: yup.string().matches(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, 'Số điện thoại không hợp lệ'),
  dateOfBirth: yup.date().max(new Date(), 'Không thể chọn trong tương lai'),
  password: yup
    .string()
    .trim()
    .required('Mật khẩu không được để trống.')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Mật khẩu phải chứa ít nhất 8 ký tự; bao gồm 1 hoa, 1 thường, 1 số và 1 ký tự đặc biệt',
    ),
  confirmPassword: yup
    .string()
    .required('Vui lòng nhập trường này !')
    .oneOf([yup.ref('password'), null], 'Mật khẩu nhập lại phải trùng với mật khẩu vừa nhập'),
});
