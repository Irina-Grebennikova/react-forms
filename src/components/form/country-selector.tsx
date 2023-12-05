import { ReactElement } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { ErrorMessage } from '@/components/ui';
import { ReactHookFormData } from '@/pages/react-hook-form';
import styles from '@/styles/form.module.scss';

type Props = {
  countries: string[];
  register?: UseFormRegister<ReactHookFormData>;
  errorMessage?: string;
};

function CountrySelector({ countries, register, errorMessage = '' }: Props): ReactElement {
  return (
    <>
      <div className={styles.formField}>
        <label htmlFor="country" className={styles.label}>
          Country
        </label>

        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            list="countries"
            {...(register ? register('country') : {})}
            id="country"
            name="country"
            autoComplete="country"
            placeholder="Select country"
          />
        </div>

        <datalist id="countries">
          {countries.map((country) => (
            <option key={country} value={country} />
          ))}
        </datalist>
      </div>
      <ErrorMessage text={errorMessage} />
    </>
  );
}

export { CountrySelector };
