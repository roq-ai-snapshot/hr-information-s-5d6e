import * as yup from 'yup';

export const teamUserValidationSchema = yup.object().shape({
  team_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
