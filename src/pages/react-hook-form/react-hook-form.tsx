import { yupResolver } from '@hookform/resolvers/yup';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

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
import { RootState } from '@/store';
import styles from '@/styles/form.module.scss';

type ReactHookFormData = {
  name: string;
  age: number;
  country: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: 'male' | 'female';
  image: File;
  agreement: boolean;
};

function ReactHookForm(): ReactElement {
  const countryList = useSelector((state: RootState) => state.countries.countryList);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReactHookFormData>({
    resolver: yupResolver(formSchema),
    mode: 'onChange',
  });
  const onSubmit = (data: ReactHookFormData): void => {
    if (!isFormValid()) {
      return;
    }
    console.log(data);
  };

  function isFormValid(): boolean {
    return Object.keys(errors).length === 0;
  }

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>
        <span>React Hook Form</span>
      </h1>
      <form className={styles.form} onSubmit={(e) => void handleSubmit(onSubmit)(e)}>
        <NameInput register={register} errorMessage={errors.name?.message} />
        <AgeInput register={register} errorMessage={errors.age?.message} />
        <CountrySelector countries={countryList} register={register} errorMessage={errors.country?.message} />
        <EmailInput register={register} errorMessage={errors.email?.message} />
        <PasswordInput register={register} errorMessage={errors.password?.message} />
        <ConfirmPasswordInput register={register} errorMessage={errors.confirmPassword?.message} />
        <GenderPicker register={register} errorMessage={errors.gender?.message} />
        <ImageLoader register={register} errorMessage={errors.image?.message} />
        <AgreementCheckbox register={register} errorMessage={errors.agreement?.message} />
        <div className={styles.submit}>
          <Button type="submit" disabled={!isFormValid()}>
            Submit
          </Button>
        </div>
      </form>
    </main>
  );
}

export { ReactHookForm, type ReactHookFormData };
