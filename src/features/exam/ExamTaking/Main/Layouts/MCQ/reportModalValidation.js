import * as yup from 'yup';

export const reportModalScheme = yup.object().shape({
  textReport: yup.string().required('Không thể để trống.'),
});
