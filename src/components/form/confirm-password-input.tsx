import { ReactElement } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui';
import { ReactHookFormData } from '@/pages/react-hook-form';
import styles from '@/styles/form.module.scss';

type Props = {
  register?: UseFormRegister<ReactHookFormData>;
  errorMessage?: string;
};

function ConfirmPasswordInput({ register, errorMessage = '' }: Props): ReactElement {
  return (
    <>
      <div className={styles.formField}>
        <label htmlFor="confirm-password" className={styles.label}>
          Confirm password
        </label>
        <div className={styles.inputWrapper}>
          <input
            className={'input ' + styles.inputField}
            {...(register ? register('confirmPassword') : {})}
            type="password"
            name="confirmPassword"
            id="confirm-password"
            autoComplete="password"
            placeholder="Repeat password"
          />
        </div>
      </div>
      <ErrorMessage text={errorMessage} />
    </>
  );
}

export { ConfirmPasswordInput };
