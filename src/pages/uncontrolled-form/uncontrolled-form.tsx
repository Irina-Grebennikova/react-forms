import { FormEvent, ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Yup, { Schema, ValidationError } from 'yup';

import {
  AgeInput,
  AgreementCheckbox,
  ConfirmPasswordInput,
  CountrySelector,
  EmailInput,
  GenderPicker,
  ImageLoader,
  NameInput,
  PasswordInput,
} from '@/components/form';
import { Button } from '@/components/ui';
import { formSchema } from '@/schemas';
import { RootState, setUncontrolledFormData } from '@/store';
import styles from '@/styles/form.module.scss';
import { getBase64 } from '@/utils';

function UncontrolledForm(): ReactElement {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const countryList = useSelector((state: RootState) => state.app.countryList);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const formData = {
      name: data.get('name'),
      age: data.get('age'),
      country: data.get('country'),
      email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword'),
      gender: data.get('gender'),
      image: data.get('image'),
      agreement: !!data.get('agreement'),
    };

    try {
      isFormValid(formData);

      if (!(formData.image instanceof File)) {
        return;
      }

      formData.image = await getBase64(formData.image);
      dispatch(setUncontrolledFormData(formData));
      navigate('/');
    } catch (err) {
      if (!(err instanceof ValidationError)) {
        return;
      }
      const newErrors: Record<string, string> = {};

      err.inner.forEach((error) => {
        if (!error.path || newErrors[error.path] !== undefined) {
          return;
        }
        newErrors[error.path] = error.message;
      });

      setErrors(newErrors);
    }
  }

  const isFormValid = (formData: Record<string, unknown>): Yup.InferType<Schema> =>
    formSchema.validateSync(formData, { abortEarly: false });

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>
        <span>Unconrolled Form</span>
      </h1>
      <form className={styles.form} onSubmit={(e) => void handleSubmit(e)}>
        <NameInput errorMessage={errors.name} />
        <AgeInput errorMessage={errors.age} />
        <CountrySelector countries={countryList} errorMessage={errors.country} />
        <EmailInput errorMessage={errors.email} />
        <PasswordInput errorMessage={errors.password} />
        <ConfirmPasswordInput errorMessage={errors.confirmPassword} />
        <GenderPicker errorMessage={errors.gender} />
        <ImageLoader errorMessage={errors.image} />
        <AgreementCheckbox errorMessage={errors.agreement} />
        <div className={styles.submit}>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </main>
  );
}

export { UncontrolledForm };
