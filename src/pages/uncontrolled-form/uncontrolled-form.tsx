import { FormEvent, ReactElement, useState } from 'react';
import Yup, { Schema, ValidationError } from 'yup';

import {
  AgeInput,
  AgreementCheckbox,
  ConfirmPasswordInput,
  EmailInput,
  GenderPicker,
  ImageLoader,
  NameInput,
  PasswordInput,
} from '@/components/form';
import { Button } from '@/components/ui';
import { formSchema } from '@/schemas';
import styles from '@/styles/form.module.scss';

function UncontrolledForm(): ReactElement {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const form = {
      name: formData.get('name'),
      age: formData.get('age'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
      gender: formData.get('gender'),
      image: formData.get('image'),
      agreement: !!formData.get('agreement'),
    };

    try {
      isFormValid(form);
    } catch (err) {
      if (!(err instanceof ValidationError)) {
        return;
      }

      err.inner.forEach((error) => {
        if (!error.path || errors[error.path] !== undefined) {
          return;
        }
        setErrors((prev) => ({ ...prev, [error.path!]: error.message }));
      });
    }
  }

  const isFormValid = (formData: Record<string, unknown>): Yup.InferType<Schema> =>
    formSchema.validateSync(formData, { abortEarly: false });

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>
        <span>Unconrolled Form</span>
      </h1>
      <form className="form" onSubmit={handleSubmit}>
        <NameInput errorMessage={errors.name} />
        <AgeInput errorMessage={errors.age} />
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
