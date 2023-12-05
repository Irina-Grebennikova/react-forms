import cn from 'classnames';
import { ChangeEvent, ReactElement, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui';
import { ReactHookFormData } from '@/pages/react-hook-form';
import styles from '@/styles/form.module.scss';

type Props = {
  register?: UseFormRegister<ReactHookFormData>;
  errorMessage?: string;
};

type StrengthValue = 'weak' | 'medium' | 'strong' | '';

function PasswordInput({ register, errorMessage = '' }: Props): ReactElement {
  const [strength, setStrength] = useState<StrengthValue>('');

  function checkStrength(e: ChangeEvent<HTMLInputElement>): void {
    const password = e.target.value;

    const isStrong = // eslint-disable-next-line
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%^&*()_+={}[\]|;':",.\/<>?~`-])(?=.*[^A-Za-z0-9])(?=.{6,})/.test(
        password
      );
    if (isStrong) {
      setStrength('strong');
      return;
    }
    const isMedium = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{4,})/.test(password);
    if (isMedium) {
      setStrength('medium');
      return;
    }
    const isWeak = /./.test(password);
    if (isWeak) {
      setStrength('weak');
      return;
    }
    setStrength('');
  }

  return (
    <>
      <div className={styles.formField}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            {...(register ? register('password') : {})}
            type="password"
            name="password"
            id="password"
            autoComplete="password"
            placeholder="Type a strong password"
            onChange={checkStrength}
          />
          <div className={cn(styles.strengthBar, styles[strength])}></div>
        </div>
      </div>
      <ErrorMessage text={errorMessage} />
    </>
  );
}

export { PasswordInput };
