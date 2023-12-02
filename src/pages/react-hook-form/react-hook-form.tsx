import cn from 'classnames';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/button';

import styles from '../uncontrolled-form/uncontrolled-form.module.scss';

type ReactHookFormData = {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: 'male' | 'female';
  image: FileList;
  agreement: boolean;
};

function ReactHookForm(): ReactElement {
  const { register, handleSubmit } = useForm<ReactHookFormData>();
  const onSubmit = (data: ReactHookFormData): void => {
    console.log(data);
  };

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>
        <span>React Hook Form</span>
      </h1>
      <form className="form" onSubmit={(e) => void handleSubmit(onSubmit)(e)}>
        <div className={styles.formField}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <div className={styles.inputWrapper}>
            <input
              className={cn('input', styles.inputField)}
              type="text"
              {...register('name')}
              id="name"
              autoComplete="name"
              placeholder="Your name"
            />
          </div>
        </div>
        <div className={styles.formField}>
          <label htmlFor="age" className={styles.label}>
            Age
          </label>
          <div className={styles.inputWrapper}>
            <input
              className={cn('input', styles.inputField)}
              type="number"
              {...register('age')}
              id="age"
              placeholder="Your age"
            />
          </div>
        </div>
        <div className={styles.formField}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <div className={styles.inputWrapper}>
            <input
              className={cn('input', styles.inputField)}
              type="text"
              {...register('email')}
              id="email"
              autoComplete="email"
              placeholder="Your email"
            />
          </div>
        </div>
        <div className={styles.formField}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <div className={styles.inputWrapper}>
            <input
              className={cn('input', styles.inputField)}
              type="password"
              {...register('password')}
              id="password"
              autoComplete="password"
              placeholder="Type a strong password"
            />
          </div>
        </div>
        <div className={styles.formField}>
          <label htmlFor="confirm-password" className={styles.label}>
            Confirm password
          </label>
          <div className={styles.inputWrapper}>
            <input
              className={cn('input', styles.inputField)}
              type="password"
              {...register('confirmPassword')}
              id="confirm-password"
              autoComplete="password"
              placeholder="Repeat password"
            />
          </div>
        </div>
        <div className={styles.formField}>
          <div className={styles.label}>Gender</div>
          <div className={cn(styles.inputWrapper, styles.genderFields)}>
            <input type="radio" {...register('gender')} id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" {...register('gender')} id="female" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className={styles.formField}>
          <label htmlFor="image" className={styles.label}>
            Profile image
          </label>
          <div className={styles.inputWrapper}>
            <input type="file" {...register('image')} id="image" />
          </div>
        </div>
        <div className={styles.acceptField}>
          <input type="checkbox" {...register('agreement')} id="agreement" />
          <label htmlFor="agreement">Accept terms and conditions</label>
        </div>
        <div className={styles.submit}>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </main>
  );
}

export { ReactHookForm };
