import { ReactElement } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui';
import { ReactHookFormData } from '@/pages/react-hook-form';
import styles from '@/styles/form.module.scss';

type Props = {
  register?: UseFormRegister<ReactHookFormData>;
  errorMessage?: string;
};

function AgeInput({ register, errorMessage = '' }: Props): ReactElement {
  return (
    <>
      <div className={styles.formField}>
        <label htmlFor="age" className={styles.label}>
          Age
        </label>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="number"
            {...(register ? register('age') : {})}
            name="age"
            id="age"
            placeholder="Your age"
          />
        </div>
      </div>
      <ErrorMessage text={errorMessage} />
    </>
  );
}

export { AgeInput };
