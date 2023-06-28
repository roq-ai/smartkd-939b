import * as yup from 'yup';

export const problemFixValidationSchema = yup.object().shape({
  description: yup.string().required(),
  solution: yup.string().required(),
  company_id: yup.string().nullable().required(),
});
