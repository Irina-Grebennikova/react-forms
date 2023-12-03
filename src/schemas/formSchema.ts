import { boolean, mixed, number, object, ref, string } from 'yup';

const FIELD_REQUIRED = 'This field is required';
const MAX_FILE_SIZE = 102400;

const formSchema = object().shape({
  name: string()
    .required(FIELD_REQUIRED)
    .matches(/^[A-ZА-Я]/, 'Name must start with an uppercase letter'),

  age: number().required(FIELD_REQUIRED).positive().integer().typeError('Age must be a number'),

  email: string()
    .required(FIELD_REQUIRED)
    .email('Email must be valid')
    .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Email must be valid'),

  password: string()
    .required(FIELD_REQUIRED)
    .matches(/^(?=.*[A-Z]).*$/, 'Password must contain at least 1 uppercase letter')
    .matches(/^(?=.*[a-z]).*$/, 'Password must contain at least 1 lowercase letter')
    .matches(/^(?=.*\d).*$/, 'Password must contain at least 1 number')
    .matches(/^(?=.*[!@#%^&*()_+={}[\]|;':",.\/<>?~`-]).*$/, 'Password must contain at least 1 special character') //eslint-disable-line
    .min(6, 'Password must be at least 6 characters long'),

  confirmPassword: string()
    .required(FIELD_REQUIRED)
    .oneOf([ref('password')], 'Passwords do not match'),

  gender: string<'male' | 'female'>().required('Please, choose your gender').oneOf(['male', 'female']),

  image: mixed<File>()
    .required('Please, upload your image')
    .transform((value: FileList | File) => (value instanceof FileList ? value[0] : value))
    .test('is-valid-type', 'Only the following formats are accepted: .jpeg, .png', (value) =>
      ['image/jpeg', 'image/png'].includes(value.type)
    )
    .test('is-valid-size', 'Max allowed size is 100KB', (value) => value.size <= MAX_FILE_SIZE),

  agreement: boolean()
    .required('You must agree with the terms and conditions to continue')
    .oneOf([true], 'You must agree with the terms and conditions to continue'),
});

export { formSchema };
