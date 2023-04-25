import * as yup from "yup";

export const generalSettingsValidationForm = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  newEmail: yup.string().email().required()
    .when('email', {
      is: (email: string) => email && email.length > 0,
      then: yup.string().notOneOf([yup.ref('email')], 'New email must be different')
    }),
  newPassword: yup.string().required()
    .when('password', {
      is: (password: string) => password && password.length > 0,
      then: yup.string().notOneOf([yup.ref('password')], 'New password must be different')
    }),
  });

  export const defaultGeneralSettingsValues = {
    email: "",
    newEmail: "",
    password: "",
    newPassword: "",
  }

  export const defaultAddTeamMemberValues = {
    file: null as any,
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    status: ""
  }

  export const addTeamMemberValidationSchema = yup.object().shape({
    file: yup.mixed().test("fileSize", "The file is too large", (value) => {
      if (!value?.length) return true // attachment is optional
      return value[0].size <= 100000
    }),
    
    });