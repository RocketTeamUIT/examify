import * as yup from 'yup';

export const userProfileScheme = yup.object().shape({
  firstName: yup.string().required('Vui lòng nhập trường này!'),
  lastName: yup.string().required('Vui lòng nhập trường này!'),
  phoneNumber: yup
    .string()
    .typeError('Số điện thoại không hợp lệ!')
    .matches(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, {
      message: 'Số điện thoại không hợp lệ!',
      excludeEmptyString: true,
    }),
  dateOfBirth: yup
    .date()
    .nullable()
    .default(undefined)
    .transform((curr, orig) => (orig === '' ? null : curr))
    .max(new Date(), 'Ngày sinh không hợp lệ!')
    .typeError('Ngày sinh không hợp lệ!')
    .required('Vui lòng nhập trường này!'),
  description: yup.string(),
});
