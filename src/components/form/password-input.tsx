import { ReactElement } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui';
import { ReactHookFormData } from '@/pages/react-hook-form';
import styles from '@/styles/form.module.scss';

type Props = {
  register?: UseFormRegister<ReactHookFormData>;
  errorMessage?: string;
};

function PasswordInput({ register, errorMessage = '' }: Props): ReactElement {
  return (
    <>
      <div className={styles.formField}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <div className={styles.inputWrapper}>
          <input
            className={'input ' + styles.inputField}
            {...(register ? register('password') : {})}
            type="password"
            name="password"
            id="password"
            autoComplete="password"
            placeholder="Type a strong password"
          />
        </div>
      </div>
      <ErrorMessage text={errorMessage} />
    </>
  );
}

export { PasswordInput };
