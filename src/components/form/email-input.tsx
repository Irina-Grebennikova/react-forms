import cn from 'classnames';
import { ReactElement } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui';
import { ReactHookFormData } from '@/pages/react-hook-form';
import styles from '@/styles/form.module.scss';

type Props = {
  register?: UseFormRegister<ReactHookFormData>;
  errorMessage?: string;
};

function EmailInput({ register, errorMessage = '' }: Props): ReactElement {
  return (
    <>
      <div className={styles.formField}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <div className={styles.inputWrapper}>
          <input
            className={cn('input', styles.inputField)}
            type="text"
            {...(register ? register('email') : {})}
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Your email"
          />
        </div>
      </div>
      <ErrorMessage text={errorMessage} />
    </>
  );
}

export { EmailInput };
