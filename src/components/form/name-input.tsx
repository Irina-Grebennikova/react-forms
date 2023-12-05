import { ReactElement } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui';
import { ReactHookFormData } from '@/pages/react-hook-form';
import styles from '@/styles/form.module.scss';

type Props = {
  register?: UseFormRegister<ReactHookFormData>;
  errorMessage?: string;
};

function NameInput({ register, errorMessage = '' }: Props): ReactElement {
  return (
    <>
      <div className={styles.formField}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="text"
            {...(register ? register('name') : {})}
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
          />
        </div>
      </div>
      <ErrorMessage text={errorMessage} />
    </>
  );
}

export { NameInput };
